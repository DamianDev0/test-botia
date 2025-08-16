import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ConfigCitas } from '../entities/config-citas.entity';
import { CreateConfigCitasDto } from '../dto/create-config-citas.dto';
import { UpdateConfigCitasDto } from '../dto/update-config-citas.dto';

@Injectable()
export class ConfigCitasService extends BaseAuthenticatedService<ConfigCitas> {
  private readonly entityName = 'CONFIG_CITAS';

  constructor(
    @InjectRepository(ConfigCitas)
    repository: Repository<ConfigCitas>,
  ) {
    super(repository);
  }

  async createConfigCitas(dto: CreateConfigCitasDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllConfigCitas(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneConfigCitas(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateConfigCitas(id: string, dto: UpdateConfigCitasDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
