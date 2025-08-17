import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ConfigQr } from '../entities/config-qr.entity';
import { CreateConfigQrDto } from '../dto/create-config-qr.dto';
import { UpdateConfigQrDto } from '../dto/update-config-qr.dto';

@Injectable()
export class ConfigQrService extends BaseAuthenticatedService<ConfigQr> {
  private readonly entityName = 'CONFIG_QR';

  constructor(
    @InjectRepository(ConfigQr)
    repository: Repository<ConfigQr>,
  ) {
    super(repository);
  }

  async createConfigQr(dto: CreateConfigQrDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllConfigQr(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneConfigQr(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateConfigQr(id: string, dto: UpdateConfigQrDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
