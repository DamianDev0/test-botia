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

  async createWithAuth(dto: DeepPartial<T>, key: string, entityName: string) {
    // this.validateKey(key);
    try {
      const doc = await this.create(dto);
      return this.buildSuccessResponse(
        `Entidad (${entityName}) creado correctamente`,
        doc,
      );
    } catch (e) {
      this.handleError(e, 'create');
    }
  }

  async findAllWithAuth(key: string, entityName: string) {
    // this.validateKey(key);
    try {
      const docs = await this.findAll();
      return this.buildSuccessResponse(
        `Entidads (${entityName}) encontrados correctamente`,
        docs,
      );
    } catch (e) {
      this.handleError(e, 'findAll');
    }
  }

  async findOneWithAuth(id: string, key: string, entityName: string) {
    // this.validateKey(key);
    try {
      const entity = await this.repository.findOne({
        where: { IDP: id } as any,
      });
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
  ) {
    // this.validateKey(key);
    try {
      let doc = await this.repository.findOne({ where: { IDP: id } as any });

      if (!doc) {
        throw new NotFoundException(`Entidad (${entityName}) no encontrado`);
      }

      await this.repository.update(id, dto);
      doc = await this.repository.findOne({ where: { IDP: id } as any });

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
