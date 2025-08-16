import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ConfigQrDet } from '../entities/config-qr-det.entity';
import { CreateConfigQrDetDto } from '../dto/create-config-qr-det.dto';
import { UpdateConfigQrDetDto } from '../dto/update-config-qr-det.dto';

@Injectable()
export class ConfigQrDetService extends BaseAuthenticatedService<ConfigQrDet> {
  private readonly entityName = 'CONFIG_QR_DET';

  constructor(
    @InjectRepository(ConfigQrDet)
    repository: Repository<ConfigQrDet>,
  ) {
    super(repository);
  }

  async createConfigQrDet(dto: CreateConfigQrDetDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllConfigQrDet(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneConfigQrDet(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateConfigQrDet(id: string, dto: UpdateConfigQrDetDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
