import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { SeeVariables } from '../entities/see-variables.entity';
import { CreateSeeVariablesDto } from '../dto/create-see-variables.dto';
import { UpdateSeeVariablesDto } from '../dto/update-see-variables.dto';

@Injectable()
export class SeeVariablesService extends BaseAuthenticatedService<SeeVariables> {
  private readonly entityName = 'see_variables';

  constructor(
    @InjectRepository(SeeVariables)
    repository: Repository<SeeVariables>,
  ) {
    super(repository);
  }

  async createSeeVariables(dto: CreateSeeVariablesDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllSeeVariables(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneSeeVariables(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateSeeVariables(id: string, dto: UpdateSeeVariablesDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
