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

  async createSeeVariablesDet(dto: CreateSeeVariablesDetDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllSeeVariablesDet(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneSeeVariablesDet(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateSeeVariablesDet(id: string, dto: UpdateSeeVariablesDetDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
