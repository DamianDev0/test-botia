import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ConfigBd } from '../entities/config-bd.entity';
import { CreateConfigBdDto } from '../dto/create-config-bd.dto';
import { UpdateConfigBdDto } from '../dto/update-config-bd.dto';

@Injectable()
export class ConfigBdService extends BaseAuthenticatedService<ConfigBd> {
  private readonly entityName = 'CONFIG_BD';

  constructor(
    @InjectRepository(ConfigBd)
    repository: Repository<ConfigBd>,
  ) {
    super(repository);
  }

  async createConfigBd(dto: CreateConfigBdDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllConfigBd(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneConfigBd(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateConfigBd(id: string, dto: UpdateConfigBdDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
