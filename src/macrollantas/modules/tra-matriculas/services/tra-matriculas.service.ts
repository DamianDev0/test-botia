import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraMatriculas } from '../entities/tra-matriculas.entity';
import { CreateTraMatriculasDto } from '../dto/create-tra-matriculas.dto';
import { UpdateTraMatriculasDto } from '../dto/update-tra-matriculas.dto';

@Injectable()
export class TraMatriculasService extends BaseAuthenticatedService<TraMatriculas> {
  private readonly entityName = 'tra_matriculas';

  constructor(
    @InjectRepository(TraMatriculas)
    repository: Repository<TraMatriculas>,
  ) {
    super(repository);
  }

  async createTraMatriculas(dto: CreateTraMatriculasDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllTraMatriculas(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneTraMatriculas(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateTraMatriculas(id: string, dto: UpdateTraMatriculasDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
