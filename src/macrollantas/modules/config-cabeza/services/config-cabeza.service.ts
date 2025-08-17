import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ConfigCabeza } from '../entities/config-cabeza.entity';
import { CreateConfigCabezaDto } from '../dto/create-config-cabeza.dto';
import { UpdateConfigCabezaDto } from '../dto/update-config-cabeza.dto';

@Injectable()
export class ConfigCabezaService extends BaseAuthenticatedService<ConfigCabeza> {
  private readonly entityName = 'CONFIG_CABEZA';

  constructor(
    @InjectRepository(ConfigCabeza)
    repository: Repository<ConfigCabeza>,
  ) {
    super(repository);
  }

  async createConfigCabeza(dto: CreateConfigCabezaDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllConfigCabeza(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneConfigCabeza(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateConfigCabeza(id: string, dto: UpdateConfigCabezaDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
