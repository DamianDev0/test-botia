import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ConfigDetalle } from '../entities/config-detalle.entity';
import { CreateConfigDetalleDto } from '../dto/create-config-detalle.dto';
import { UpdateConfigDetalleDto } from '../dto/update-config-detalle.dto';

@Injectable()
export class ConfigDetalleService extends BaseAuthenticatedService<ConfigDetalle> {
  private readonly entityName = 'CONFIG_DETALLE';

  constructor(
    @InjectRepository(ConfigDetalle)
    repository: Repository<ConfigDetalle>,
  ) {
    super(repository);
  }

  async createConfigDetalle(dto: CreateConfigDetalleDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllConfigDetalle(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneConfigDetalle(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateConfigDetalle(id: string, dto: UpdateConfigDetalleDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
