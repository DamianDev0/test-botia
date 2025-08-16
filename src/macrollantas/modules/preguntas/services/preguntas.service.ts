import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Preguntas } from '../entities/preguntas.entity';
import { CreatePreguntasDto } from '../dto/create-preguntas.dto';
import { UpdatePreguntasDto } from '../dto/update-preguntas.dto';

@Injectable()
export class PreguntasService extends BaseAuthenticatedService<Preguntas> {
  private readonly entityName = 'PREGUNTAS';

  constructor(
    @InjectRepository(Preguntas)
    repository: Repository<Preguntas>,
  ) {
    super(repository);
  }

  async createPreguntas(dto: CreatePreguntasDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllPreguntas(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOnePreguntas(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updatePreguntas(id: string, dto: UpdatePreguntasDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
