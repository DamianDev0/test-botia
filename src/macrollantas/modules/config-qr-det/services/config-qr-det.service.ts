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

  async createConfigQrDet(dto: CreateConfigQrDetDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllConfigQrDet(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneConfigQrDet(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateConfigQrDet(id: string, dto: UpdateConfigQrDetDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
