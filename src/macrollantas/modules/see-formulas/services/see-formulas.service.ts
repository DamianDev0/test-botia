import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { SeeFormulas } from '../entities/see-formulas.entity';
import { CreateSeeFormulasDto } from '../dto/create-see-formulas.dto';
import { UpdateSeeFormulasDto } from '../dto/update-see-formulas.dto';

@Injectable()
export class SeeFormulasService extends BaseAuthenticatedService<SeeFormulas> {
  private readonly entityName = 'see_formulas';

  constructor(
    @InjectRepository(SeeFormulas)
    repository: Repository<SeeFormulas>,
  ) {
    super(repository);
  }

  async createSeeFormulas(dto: CreateSeeFormulasDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllSeeFormulas(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneSeeFormulas(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateSeeFormulas(id: string, dto: UpdateSeeFormulasDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
