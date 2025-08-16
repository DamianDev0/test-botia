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

  async createPrecios(dto: Precios, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllPrecios(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOnePrecios(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updatePrecios(id: string, dto: Precios, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
