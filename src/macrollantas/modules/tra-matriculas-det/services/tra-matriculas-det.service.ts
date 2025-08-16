import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraMatriculasDet } from '../entities/tra-matriculas-det.entity';
import { CreateTraMatriculasDetDto } from '../dto/create-tra-matriculas-det.dto';
import { UpdateTraMatriculasDetDto } from '../dto/update-tra-matriculas-det.dto';

@Injectable()
export class TraMatriculasDetService extends BaseAuthenticatedService<TraMatriculasDet> {
  private readonly entityName = 'tra_matriculas_det';

  constructor(
    @InjectRepository(TraMatriculasDet)
    repository: Repository<TraMatriculasDet>,
  ) {
    super(repository);
  }

  async createTraMatriculasDet(dto: CreateTraMatriculasDetDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllTraMatriculasDet(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneTraMatriculasDet(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateTraMatriculasDet(id: string, dto: UpdateTraMatriculasDetDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
