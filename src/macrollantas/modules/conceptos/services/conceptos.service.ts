import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Conceptos } from '../entities/conceptos.entity';
import { CreateConceptosDto } from '../dto/create-conceptos.dto';
import { UpdateConceptosDto } from '../dto/update-conceptos.dto';

@Injectable()
export class ConceptosService extends BaseAuthenticatedService<Conceptos> {
  private readonly entityName = 'conceptos';

  constructor(
    @InjectRepository(Conceptos)
    repository: Repository<Conceptos>,
  ) {
    super(repository);
  }

  async createConceptos(dto: CreateConceptosDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllConceptos(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneConceptos(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateConceptos(id: string, dto: UpdateConceptosDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
