import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Repository } from 'typeorm';

import { CreateConfigAutogestionDto } from '../dto/create-config-autogestion.dto';
import { UpdateConfigAutogestionDto } from '../dto/update-config-autogestion.dto';
import { ConfigAutogestion } from '../entities/config-autogestion.entity';

@Injectable()
export class ConfigAutogestionService extends BaseAuthenticatedService<ConfigAutogestion> {
  private readonly entityName = 'CONFIG_AUTOGESTION';

  constructor(
    @InjectRepository(ConfigAutogestion)
    configAutogestionRepository: Repository<ConfigAutogestion>,
  ) {
    super(configAutogestionRepository);
  }

  async createConfigAutogestion(dto: CreateConfigAutogestionDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllConfigAutogestions(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneConfigAutogestion(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateConfigAutogestion(
    id: string,
    dto: UpdateConfigAutogestionDto,
    key: string,
  ) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
