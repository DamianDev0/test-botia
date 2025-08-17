import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { SeeVariablesDet } from '../entities/see-variables-det.entity';
import { CreateSeeVariablesDetDto } from '../dto/create-see-variables-det.dto';
import { UpdateSeeVariablesDetDto } from '../dto/update-see-variables-det.dto';

@Injectable()
export class SeeVariablesDetService extends BaseAuthenticatedService<SeeVariablesDet> {
  private readonly entityName = 'see_variables_det';

  constructor(
    @InjectRepository(SeeVariablesDet)
    repository: Repository<SeeVariablesDet>,
  ) {
    super(repository);
  }

  async createSeeVariablesDet(dto: CreateSeeVariablesDetDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllSeeVariablesDet(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneSeeVariablesDet(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateSeeVariablesDet(id: string, dto: UpdateSeeVariablesDetDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
