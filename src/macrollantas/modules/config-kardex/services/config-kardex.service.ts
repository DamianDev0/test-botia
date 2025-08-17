import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ConfigKardex } from '../entities/config-kardex.entity';
import { CreateConfigKardexDto } from '../dto/create-config-kardex.dto';
import { UpdateConfigKardexDto } from '../dto/update-config-kardex.dto';

@Injectable()
export class ConfigKardexService extends BaseAuthenticatedService<ConfigKardex> {
  private readonly entityName = 'CONFIG_KARDEX';

  constructor(
    @InjectRepository(ConfigKardex)
    repository: Repository<ConfigKardex>,
  ) {
    super(repository);
  }

  async createConfigKardex(dto: CreateConfigKardexDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllConfigKardex(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneConfigKardex(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateConfigKardex(id: string, dto: UpdateConfigKardexDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
