import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ConfigCaptura } from '../entities/config-captura.entity';
import { CreateConfigCapturaDto } from '../dto/create-config-captura.dto';
import { UpdateConfigCapturaDto } from '../dto/update-config-captura.dto';

@Injectable()
export class ConfigCapturaService extends BaseAuthenticatedService<ConfigCaptura> {
  private readonly entityName = 'CONFIG_CAPTURA';

  constructor(
    @InjectRepository(ConfigCaptura)
    repository: Repository<ConfigCaptura>,
  ) {
    super(repository);
  }

  async createConfigCaptura(dto: CreateConfigCapturaDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllConfigCaptura(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneConfigCaptura(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateConfigCaptura(id: string, dto: UpdateConfigCapturaDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
