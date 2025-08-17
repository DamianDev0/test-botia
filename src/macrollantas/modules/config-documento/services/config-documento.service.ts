import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ConfigDocumento } from '../entities/config-documento.entity';
import { CreateConfigDocumentoDto } from '../dto/create-config-documento.dto';

@Injectable()
export class ConfigDocumentoService extends BaseAuthenticatedService<ConfigDocumento> {
  private readonly entityName = 'CONFIG_DOCUMENTO';

  constructor(
    @InjectRepository(ConfigDocumento)
    repository: Repository<ConfigDocumento>,
  ) {
    super(repository);
  }

  async createConfigDocumento(
    dto: CreateConfigDocumentoDto,
    key: string,
    schema = 'public',
  ) {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllConfigDocumento(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneConfigDocumento(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }
}
