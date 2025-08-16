import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Repository } from 'typeorm';
import { Config } from '../entities/config.entity';
import { CreateConfigDto } from '../dto/create-config.dto';
import { UpdateConfigDto } from '../dto/update-config.dto';

@Injectable()
export class ConfigService extends BaseAuthenticatedService<Config> {
  private readonly entityName = 'Config';

  constructor(
    @InjectRepository(Config)
    configRepository: Repository<Config>,
  ) {
    super(configRepository);
  }

  async createConfig(dto: CreateConfigDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllConfigs(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneConfig(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateConfig(id: string, dto: UpdateConfigDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
