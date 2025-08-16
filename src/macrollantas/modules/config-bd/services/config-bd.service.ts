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

  async createConfigBd(dto: CreateConfigBdDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllConfigBd(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneConfigBd(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateConfigBd(id: string, dto: UpdateConfigBdDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
