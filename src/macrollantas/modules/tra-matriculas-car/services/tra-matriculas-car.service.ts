import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraMatriculasCar } from '../entities/tra-matriculas-car.entity';
import { CreateTraMatriculasCarDto } from '../dto/create-tra-matriculas-car.dto';
import { UpdateTraMatriculasCarDto } from '../dto/update-tra-matriculas-car.dto';

@Injectable()
export class TraMatriculasCarService extends BaseAuthenticatedService<TraMatriculasCar> {
  private readonly entityName = 'tra_matriculas_car';

  constructor(
    @InjectRepository(TraMatriculasCar)
    repository: Repository<TraMatriculasCar>,
  ) {
    super(repository);
  }

  async createTraMatriculasCar(dto: CreateTraMatriculasCarDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllTraMatriculasCar(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneTraMatriculasCar(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateTraMatriculasCar(id: string, dto: UpdateTraMatriculasCarDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
