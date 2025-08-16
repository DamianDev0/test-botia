import * as fs from 'fs';
import * as path from 'path';

// Ruta a la carpeta 'src/macrollantas/modules' (porque 'macrollantas' está dentro de 'src')
const modulesPath = path.resolve(
  __dirname,
  '..',
  '..',
  'src',
  'macrollantas',
  'modules',
);

// Verificar si la carpeta existe
if (!fs.existsSync(modulesPath)) {
  console.error(
    `La carpeta ${modulesPath} no existe. Asegúrate de que 'src/macrollantas/modules' esté en la ubicación correcta.`,
  );
  process.exit(1);
} else {
  console.log(`Carpeta de módulos encontrada en: ${modulesPath}`);
}

// Leer todas las carpetas dentro de 'modules'
const moduleFiles = fs
  .readdirSync(modulesPath, { withFileTypes: true }) // Leemos los directorios dentro de 'modules'
  .filter((dirent) => dirent.isDirectory()) // Filtramos solo las carpetas
  .map((dirent) => dirent.name); // Obtenemos los nombres de las carpetas

console.log(
  `Módulos encontrados: ${moduleFiles.length > 0 ? moduleFiles.join(', ') : 'Ninguno'}`,
);

let imports = '';
let exportStatements = '';

// Recorrer todos los módulos encontrados
moduleFiles.forEach((moduleFolder) => {
  const modulePath = path.resolve(
    modulesPath,
    moduleFolder,
    `${moduleFolder}.module.ts`, // Asegúrate de que el archivo de módulo se llama con el mismo nombre que la carpeta
  );

  if (fs.existsSync(modulePath)) {
    // Convertir el nombre del módulo a PascalCase
    const moduleName = `${moduleFolder.charAt(0).toUpperCase() + moduleFolder.slice(1)}Module`;
    // Agregar la importación
    imports += `import { ${moduleName} } from './modules/${moduleFolder}/${moduleFolder}.module';\n`;
    // Agregar la exportación
    exportStatements += `    ${moduleName},\n`;
  } else {
    console.log(`No se encontró el módulo: ${moduleFolder}`);
  }
});

// Verificar si se generaron importaciones y exportaciones
if (!imports) {
  console.log('No se generaron importaciones para los módulos.');
} else {
  console.log('Importaciones generadas correctamente.');
}

// Generación del contenido del archivo `DomainModule`
const domainModuleContent = `
import { Module } from '@nestjs/common';
${imports}

@Module({
  imports: [
    ${moduleFiles
      .map(
        (moduleFolder) =>
          `${moduleFolder.charAt(0).toUpperCase() + moduleFolder.slice(1)}Module`,
      )
      .join(',\n    ')},
  ],
  exports: [
    ${exportStatements}
  ],
})
export class DomainModule {}
`;

// Verificamos si el contenido generado tiene importaciones y exportaciones
if (
  !domainModuleContent.includes('imports') ||
  !domainModuleContent.includes('exports')
) {
  console.log(
    'El contenido de DomainModule no contiene importaciones o exportaciones válidas.',
  );
} else {
  // Escribir el contenido generado en el archivo `domain.module.ts`
  fs.writeFileSync(
    path.resolve(
      __dirname,
      '..',
      '..',
      'src',
      'macrollantas',
      'domain.module.ts',
    ), // Guardamos el archivo en la ubicación correcta
    domainModuleContent,
  );
  console.log('DomainModule ha sido generado exitosamente!');
}
