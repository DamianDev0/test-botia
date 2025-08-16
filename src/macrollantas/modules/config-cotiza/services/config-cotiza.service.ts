import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ConfigCotiza } from '../entities/config-cotiza.entity';
import { CreateConfigCotizaDto } from '../dto/create-config-cotiza.dto';
import { UpdateConfigCotizaDto } from '../dto/update-config-cotiza.dto';

@Injectable()
export class ConfigCotizaService extends BaseAuthenticatedService<ConfigCotiza> {
  private readonly entityName = 'CONFIG_COTIZA';

  constructor(
    @InjectRepository(ConfigCotiza)
    repository: Repository<ConfigCotiza>,
  ) {
    super(repository);
  }

  async createConfigCotiza(dto: CreateConfigCotizaDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllConfigCotiza(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneConfigCotiza(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateConfigCotiza(id: string, dto: UpdateConfigCotizaDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
