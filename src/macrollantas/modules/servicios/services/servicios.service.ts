import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Servicios } from '../entities/servicios.entity';
import { CreateServiciosDto } from '../dto/create-servicios.dto';
import { UpdateServiciosDto } from '../dto/update-servicios.dto';

@Injectable()
export class ServiciosService extends BaseAuthenticatedService<Servicios> {
  private readonly entityName = 'servicios';

  constructor(
    @InjectRepository(Servicios)
    repository: Repository<Servicios>,
  ) {
    super(repository);
  }

  async createServicios(dto: CreateServiciosDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllServicios(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneServicios(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateServicios(id: string, dto: UpdateServiciosDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
