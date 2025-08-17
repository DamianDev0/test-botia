import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ConfigTargeta } from '../entities/config-targeta.entity';
import { CreateConfigTargetaDto } from '../dto/create-config-targeta.dto';
import { UpdateConfigTargetaDto } from '../dto/update-config-targeta.dto';

@Injectable()
export class ConfigTargetaService extends BaseAuthenticatedService<ConfigTargeta> {
  private readonly entityName = 'CONFIG_TARGETA';

  constructor(
    @InjectRepository(ConfigTargeta)
    repository: Repository<ConfigTargeta>,
  ) {
    super(repository);
  }

  async createConfigTargeta(dto: CreateConfigTargetaDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllConfigTargeta(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneConfigTargeta(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateConfigTargeta(id: string, dto: UpdateConfigTargetaDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
