import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ConfigZonas } from '../entities/config-zonas.entity';
import { CreateConfigZonasDto } from '../dto/create-config-zonas.dto';
import { UpdateConfigZonasDto } from '../dto/update-config-zonas.dto';

@Injectable()
export class ConfigZonasService extends BaseAuthenticatedService<ConfigZonas> {
  private readonly entityName = 'CONFIG_ZONAS';

  constructor(
    @InjectRepository(ConfigZonas)
    repository: Repository<ConfigZonas>,
  ) {
    super(repository);
  }

  async createConfigZonas(dto: CreateConfigZonasDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllConfigZonas(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneConfigZonas(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateConfigZonas(id: string, dto: UpdateConfigZonasDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
