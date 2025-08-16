import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConceptosCon } from '../entities/conceptos-co.entity';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from '../../../common/services/base-authenticated.service';

@Injectable()
export class ConceptosConService extends BaseAuthenticatedService<ConceptosCon> {
  private readonly entityName = 'CONCEPTOS_CON';
  constructor(
    @InjectRepository(ConceptosCon)
    readonly repository: Repository<ConceptosCon>,
  ) {
    super(repository);
  }

  async createConceptosCon(dto: ConceptosCon, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllConceptosCon(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneConceptosCon(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateConceptosCon(id: string, dto: ConceptosCon, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
