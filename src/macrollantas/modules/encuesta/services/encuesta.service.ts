import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Encuesta } from '../entities/encuesta.entity';
import { CreateEncuestaDto } from '../dto/create-encuesta.dto';
import { UpdateEncuestaDto } from '../dto/update-encuesta.dto';

@Injectable()
export class EncuestaService extends BaseAuthenticatedService<Encuesta> {
  private readonly entityName = 'ENCUESTA';

  constructor(
    @InjectRepository(Encuesta)
    repository: Repository<Encuesta>,
  ) {
    super(repository);
  }

  async createEncuesta(dto: CreateEncuestaDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllEncuesta(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneEncuesta(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateEncuesta(id: string, dto: UpdateEncuestaDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
