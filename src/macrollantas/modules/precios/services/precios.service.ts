import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Precios } from '../entities/precios.entity';
import { BaseAuthenticatedService } from '../../../common/services/base-authenticated.service';

@Injectable()
export class PreciosService extends BaseAuthenticatedService<Precios> {
  private readonly entityName = 'PRECIOS';
  constructor(
    @InjectRepository(Precios)
    protected readonly repository: Repository<Precios>,
  ) {
    super(repository);
  }

  async createPrecios(dto: Precios, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllPrecios(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOnePrecios(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updatePrecios(id: string, dto: Precios, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
