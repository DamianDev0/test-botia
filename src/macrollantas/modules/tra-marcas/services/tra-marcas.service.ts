import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraMarcas } from '../entities/tra-marcas.entity';
import { CreateTraMarcasDto } from '../dto/create-tra-marcas.dto';
import { UpdateTraMarcasDto } from '../dto/update-tra-marcas.dto';

@Injectable()
export class TraMarcasService extends BaseAuthenticatedService<TraMarcas> {
  private readonly entityName = 'tra_marcas';

  constructor(
    @InjectRepository(TraMarcas)
    repository: Repository<TraMarcas>,
  ) {
    super(repository);
  }

  async createTraMarcas(dto: CreateTraMarcasDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllTraMarcas(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneTraMarcas(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateTraMarcas(id: string, dto: UpdateTraMarcasDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
