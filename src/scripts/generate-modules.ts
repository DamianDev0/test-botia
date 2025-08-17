import * as fs from 'fs-extra';
import * as path from 'path';

/**
 * Ruta al archivo de entidades origen
 */
const entitySourcePath = path.resolve(
  __dirname,
  '..',
  'macrollantas',
  'entities',
  'metrofrenos.entity.ts',
);

/**
 * Ruta base donde se crearán los módulos
 */
const basePath = path.resolve(__dirname, '..', 'macrollantas', 'modules');

/**
 * Leer archivo de entidades
 */
const entityFile = fs.readFileSync(entitySourcePath, 'utf8');

/**
 * Detectar entidades con el formato:
 * // @Entity('NOMBRE TABLA')
 * // export class NOMBRE_CLASE
 */
const matches = [
  ...entityFile.matchAll(/@Entity\('(.+?)'\)\s*\/\/\s*export class (\w+)/g),
];
const ENTITIES = matches.map(([, table, className]) => ({
  table,
  className,
}));

/**
 * Convierte algo como CONFIG_BD a config-bd
 */
function kebabCase(input: string) {
  return input.toLowerCase().replace(/_/g, '-');
}

/**
 * Extraer el cuerpo de la clase
 */
function extractClassBody(className: string, source: string): string {
  const regex = new RegExp(
    `export class ${className}\\s*{([\\s\\S]*?)\\n}`,
    'g',
  );
  const match = regex.exec(source);
  return match?.[1]?.trim() ?? '';
}

/**
 * Template para la Entity
 */
function entityTemplateWithProperties(
  className: string,
  table: string,
  body: string,
) {
  return `import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('${table}')
export class ${toPascalCase(className)} extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;

${body
  .split('\n')
  .map((line) => `  ${line.trim()}`)
  .join('\n')}
}
`;
}

/**
 * Crear DTO desde los campos de la entidad
 */
function createDtoFromEntityFields(
  className: string,
  kebab: string,
  body: string,
): string {
  const fields = body.split('\n').filter((line) => line.includes('@Column'));
  const results: string[] = [];

  for (let i = 0; i < fields.length; i++) {
    const fieldLine = fields[i + 1]?.trim() || '';
    const nameMatch = /^([a-zA-Z0-9_]+):/.exec(fieldLine);
    const typeMatch = /: ([a-zA-Z0-9_]+)/.exec(fieldLine);

    if (!nameMatch || !typeMatch) continue;

    const name = nameMatch[1];
    const type = typeMatch[1];
    const validator =
      type === 'number'
        ? '@IsNumber()'
        : type === 'Date'
          ? '@IsDateString()'
          : '@IsString()';

    results.push(
      [
        '  @IsOptional()',
        `  ${validator}`,
        '  @ApiPropertyOptional()',
        `  ${name}: ${type};`,
      ].join('\n'),
    );
  }

  return `import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class Create${toPascalCase(className)}Dto {
${results.join('\n\n')}
}
`;
}

/**
 * DTO Update basado en PartialType
 */
function dtoTemplate(
  className: string,
  kebab: string,
  type: 'Create' | 'Update',
) {
  if (type === 'Update') {
    return `import { PartialType } from '@nestjs/swagger';
import { Create${toPascalCase(className)}Dto } from './create-${kebab}.dto';

export class Update${toPascalCase(className)}Dto extends PartialType(Create${toPascalCase(className)}Dto) {}
`;
  }
  return '';
}

/**
 * Template para Service
 */
function serviceTemplate(className: string, kebab: string) {
  const pascal = toPascalCase(className);
  return `import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ${pascal} } from '../entities/${kebab}.entity';
import { Create${pascal}Dto } from '../dto/create-${kebab}.dto';
import { Update${pascal}Dto } from '../dto/update-${kebab}.dto';

@Injectable()
export class ${pascal}Service extends BaseAuthenticatedService<${pascal}> {
  private readonly entityName = '${className}';

  constructor(
    @InjectRepository(${pascal})
    repository: Repository<${pascal}>,
  ) {
    super(repository);
  }

  async create${pascal}(dto: Create${pascal}Dto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAll${pascal}(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOne${pascal}(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async update${pascal}(id: string, dto: Update${pascal}Dto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
`;
}

/**
 * Template Controller
 */
function controllerTemplate(className: string, kebab: string) {
  const pascal = toPascalCase(className);
  return `import { Controller } from '@nestjs/common';
import { ${pascal} } from '../entities/${kebab}.entity';
import { Create${pascal}Dto } from '../dto/create-${kebab}.dto';
import { Update${pascal}Dto } from '../dto/update-${kebab}.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ${pascal}Service } from '../services/${kebab}.service';

@Controller('${kebab}')
export class ${pascal}Controller extends BaseController<
  ${pascal},
  Create${pascal}Dto,
  Update${pascal}Dto
>('${className}', Create${pascal}Dto, Update${pascal}Dto) {
  constructor(service: ${pascal}Service) {
    super(service);
  }
}
`;
}

/**
 * Template Module
 */
function moduleTemplate(className: string, kebab: string) {
  const pascal = toPascalCase(className);
  return `import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ${pascal} } from './entities/${kebab}.entity';
import { ${pascal}Service } from './services/${kebab}.service';
import { ${pascal}Controller } from './controllers/${kebab}.controller';

@Module({
  imports: [TypeOrmModule.forFeature([${pascal}])],
  controllers: [${pascal}Controller],
  providers: [${pascal}Service],
})
export class ${pascal}Module {}
`;
}

/**
 * Convertir CONFIG_BD -> ConfigBd
 */
function toPascalCase(input: string) {
  return input
    .toLowerCase()
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

/**
 * Generar módulos
 */
async function generateModules() {
  for (const { table, className } of ENTITIES) {
    const kebab = kebabCase(className);
    const modulePath = path.join(basePath, kebab);

    // Eliminar carpeta si existe
    if (fs.existsSync(modulePath)) {
      fs.removeSync(modulePath);
    }

    // Crear estructura limpia
    const folders = ['controllers', 'dto', 'entities', 'services'];
    folders.forEach((folder) => {
      fs.ensureDirSync(path.join(modulePath, folder));
    });

    const classBody = extractClassBody(className, entityFile);

    fs.writeFileSync(
      path.join(modulePath, 'entities', `${kebab}.entity.ts`),
      entityTemplateWithProperties(className, table, classBody),
    );
    fs.writeFileSync(
      path.join(modulePath, 'services', `${kebab}.service.ts`),
      serviceTemplate(className, kebab),
    );
    fs.writeFileSync(
      path.join(modulePath, 'controllers', `${kebab}.controller.ts`),
      controllerTemplate(className, kebab),
    );
    fs.writeFileSync(
      path.join(modulePath, `${kebab}.module.ts`),
      moduleTemplate(className, kebab),
    );
    fs.writeFileSync(
      path.join(modulePath, 'dto', `create-${kebab}.dto.ts`),
      createDtoFromEntityFields(className, kebab, classBody),
    );
    fs.writeFileSync(
      path.join(modulePath, 'dto', `update-${kebab}.dto.ts`),
      dtoTemplate(className, kebab, 'Update'),
    );

    console.log(`✅ Módulo generado: ${className} (${table})`);
  }
}

generateModules().catch((err) => console.error('Error:', err));
