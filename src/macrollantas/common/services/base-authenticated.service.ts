import {
  Injectable,
  // UnauthorizedException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { BaseEntity, DeepPartial, Repository } from 'typeorm';
import { GenericService } from './base.service';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export abstract class BaseAuthenticatedService<
  T extends BaseEntity,
> extends GenericService<T> {
  constructor(repository: Repository<T>) {
    super(repository);
  }

  // protected validateKey(key: string): void {
  //   if (key !== process.env.KEY) {
  //     throw new UnauthorizedException();
  //   }
  // }

  protected buildSuccessResponse(message: string, data?: any) {
    return {
      status: true,
      message,
      data,
    };
  }

  protected handleError(error: any, operation: string): never {
    console.error(`Error in ${operation}:`, error);
    throw new InternalServerErrorException(error);
  }

  protected async runWithSchema<R>(
    schema: string,
    cb: (repo: Repository<T>) => Promise<R>,
  ): Promise<R> {
    const runner = this.repository.manager.connection.createQueryRunner();
    await runner.connect();
    try {
      await runner.query(`SET search_path TO "${schema}", public`);
      const repo = runner.manager.getRepository<T>(
        this.repository.metadata.target as any,
      );
      return await cb(repo);
    } finally {
      await runner.release();
    }
  }

  async createWithAuth(
    dto: DeepPartial<T>,
    key: string,
    entityName: string,
    schema = 'public',
  ) {
    // this.validateKey(key);
    try {
      const doc = await this.runWithSchema(schema, async (repo) => {
        const entity = repo.create(dto);
        return await repo.save(entity);
      });
      return this.buildSuccessResponse(
        `Entidad (${entityName}) creado correctamente`,
        doc,
      );
    } catch (e) {
      this.handleError(e, 'create');
    }
  }

  async findAllWithAuth(
    key: string,
    entityName: string,
    schema = 'public',
  ) {
    // this.validateKey(key);
    try {
      const docs = await this.runWithSchema(schema, (repo) => repo.find());
      return this.buildSuccessResponse(
        `Entidads (${entityName}) encontrados correctamente`,
        docs,
      );
    } catch (e) {
      this.handleError(e, 'findAll');
    }
  }

  async findOneWithAuth(
    id: string,
    key: string,
    entityName: string,
    schema = 'public',
  ) {
    // this.validateKey(key);
    try {
      const entity = await this.runWithSchema(schema, (repo) =>
        repo.findOne({ where: { IDP: id } as any }),
      );
      return this.buildSuccessResponse(
        `Entidad (${entityName}) encontrado correctamente`,
        entity,
      );
    } catch (e) {
      this.handleError(e, 'findOne');
    }
  }

  async updateWithAuth(
    id: string,
    dto: QueryDeepPartialEntity<T>,
    key: string,
    entityName: string,
    schema = 'public',
  ) {
    // this.validateKey(key);
    try {
      const doc = await this.runWithSchema(schema, async (repo) => {
        let entity = await repo.findOne({ where: { IDP: id } as any });
        if (!entity) {
          throw new NotFoundException(`Entidad (${entityName}) no encontrado`);
        }
        await repo.update(id, dto);
        entity = await repo.findOne({ where: { IDP: id } as any });
        return entity;
      });

      return this.buildSuccessResponse(
        `Entidad (${entityName}) actualizado correctamente`,
        doc,
      );
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      this.handleError(e, 'update');
    }
  }
}
