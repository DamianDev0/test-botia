import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Celdas } from '../entities/celdas.entity';
import { CreateCeldasDto } from '../dto/create-celdas.dto';
import { UpdateCeldasDto } from '../dto/update-celdas.dto';

@Injectable()
export class CeldasService extends BaseAuthenticatedService<Celdas> {
  private readonly entityName = 'celdas';

  constructor(
    @InjectRepository(Celdas)
    repository: Repository<Celdas>,
  ) {
    super(repository);
  }

  async createCeldas(dto: CreateCeldasDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllCeldas(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneCeldas(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateCeldas(id: string, dto: UpdateCeldasDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
