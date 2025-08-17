import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ConfigUbicacion } from '../entities/config-ubicacion.entity';
import { CreateConfigUbicacionDto } from '../dto/create-config-ubicacion.dto';
import { UpdateConfigUbicacionDto } from '../dto/update-config-ubicacion.dto';

@Injectable()
export class ConfigUbicacionService extends BaseAuthenticatedService<ConfigUbicacion> {
  private readonly entityName = 'CONFIG_UBICACION';

  constructor(
    @InjectRepository(ConfigUbicacion)
    repository: Repository<ConfigUbicacion>,
  ) {
    super(repository);
  }

  async createConfigUbicacion(dto: CreateConfigUbicacionDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllConfigUbicacion(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneConfigUbicacion(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateConfigUbicacion(id: string, dto: UpdateConfigUbicacionDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
