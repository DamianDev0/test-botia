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

  async createConfigQr(dto: CreateConfigQrDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllConfigQr(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneConfigQr(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateConfigQr(id: string, dto: UpdateConfigQrDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
