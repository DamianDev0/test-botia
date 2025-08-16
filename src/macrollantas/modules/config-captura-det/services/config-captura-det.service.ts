import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ConfigCapturaDet } from '../entities/config-captura-det.entity';
import { CreateConfigCapturaDetDto } from '../dto/create-config-captura-det.dto';
import { UpdateConfigCapturaDetDto } from '../dto/update-config-captura-det.dto';

@Injectable()
export class ConfigCapturaDetService extends BaseAuthenticatedService<ConfigCapturaDet> {
  private readonly entityName = 'CONFIG_CAPTURA_DET';

  constructor(
    @InjectRepository(ConfigCapturaDet)
    repository: Repository<ConfigCapturaDet>,
  ) {
    super(repository);
  }

  async createConfigCapturaDet(dto: CreateConfigCapturaDetDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllConfigCapturaDet(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneConfigCapturaDet(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateConfigCapturaDet(id: string, dto: UpdateConfigCapturaDetDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
