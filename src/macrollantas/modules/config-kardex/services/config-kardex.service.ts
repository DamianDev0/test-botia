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

  async createConfigKardex(dto: CreateConfigKardexDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllConfigKardex(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneConfigKardex(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateConfigKardex(id: string, dto: UpdateConfigKardexDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
