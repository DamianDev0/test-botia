import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ConfigRel } from '../entities/config-rel.entity';
import { CreateConfigRelDto } from '../dto/create-config-rel.dto';
import { UpdateConfigRelDto } from '../dto/update-config-rel.dto';

@Injectable()
export class ConfigRelService extends BaseAuthenticatedService<ConfigRel> {
  private readonly entityName = 'CONFIG_REL';

  constructor(
    @InjectRepository(ConfigRel)
    repository: Repository<ConfigRel>,
  ) {
    super(repository);
  }

  async createConfigRel(dto: CreateConfigRelDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllConfigRel(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneConfigRel(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateConfigRel(id: string, dto: UpdateConfigRelDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
