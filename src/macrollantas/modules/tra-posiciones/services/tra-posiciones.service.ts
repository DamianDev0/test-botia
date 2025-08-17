import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraPosiciones } from '../entities/tra-posiciones.entity';
import { CreateTraPosicionesDto } from '../dto/create-tra-posiciones.dto';
import { UpdateTraPosicionesDto } from '../dto/update-tra-posiciones.dto';

@Injectable()
export class TraPosicionesService extends BaseAuthenticatedService<TraPosiciones> {
  private readonly entityName = 'tra_posiciones';

  constructor(
    @InjectRepository(TraPosiciones)
    repository: Repository<TraPosiciones>,
  ) {
    super(repository);
  }

  async createTraPosiciones(dto: CreateTraPosicionesDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllTraPosiciones(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneTraPosiciones(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateTraPosiciones(id: string, dto: UpdateTraPosicionesDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
