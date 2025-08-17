import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { ConfigEncuesta } from '../entities/config-encuesta.entity';
import { CreateConfigEncuestaDto } from '../dto/create-config-encuesta.dto';
import { UpdateConfigEncuestaDto } from '../dto/update-config-encuesta.dto';

@Injectable()
export class ConfigEncuestaService extends BaseAuthenticatedService<ConfigEncuesta> {
  private readonly entityName = 'CONFIG_ENCUESTA';

  constructor(
    @InjectRepository(ConfigEncuesta)
    repository: Repository<ConfigEncuesta>,
  ) {
    super(repository);
  }

  async createConfigEncuesta(dto: CreateConfigEncuestaDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllConfigEncuesta(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneConfigEncuesta(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateConfigEncuesta(id: string, dto: UpdateConfigEncuestaDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
