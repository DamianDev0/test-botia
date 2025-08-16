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

  async createEncuesta(dto: CreateEncuestaDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllEncuesta(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneEncuesta(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateEncuesta(id: string, dto: UpdateEncuestaDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
