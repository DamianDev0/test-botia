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

  async createConfigUbicacion(dto: CreateConfigUbicacionDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllConfigUbicacion(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneConfigUbicacion(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateConfigUbicacion(id: string, dto: UpdateConfigUbicacionDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
