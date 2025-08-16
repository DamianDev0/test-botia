import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ConfigDocumento } from '../entities/config-documento.entity';
import { CreateConfigDocumentoDto } from '../dto/create-config-documento.dto';
import { UpdateConfigDocumentoDto } from '../dto/update-config-documento.dto';

@Injectable()
export class ConfigDocumentoService extends BaseAuthenticatedService<ConfigDocumento> {
  private readonly entityName = 'CONFIG_DOCUMENTO';

  constructor(
    @InjectRepository(ConfigDocumento)
    repository: Repository<ConfigDocumento>,
  ) {
    super(repository);
  }

  async createConfigDocumento(dto: CreateConfigDocumentoDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllConfigDocumento(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneConfigDocumento(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateConfigDocumento(
    id: string,
    dto: UpdateConfigDocumentoDto,
    key: string,
  ) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
