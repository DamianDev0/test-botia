import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraPeriodos } from '../entities/tra-periodos.entity';
import { CreateTraPeriodosDto } from '../dto/create-tra-periodos.dto';
import { UpdateTraPeriodosDto } from '../dto/update-tra-periodos.dto';

@Injectable()
export class TraPeriodosService extends BaseAuthenticatedService<TraPeriodos> {
  private readonly entityName = 'tra_periodos';

  constructor(
    @InjectRepository(TraPeriodos)
    repository: Repository<TraPeriodos>,
  ) {
    super(repository);
  }

  async createTraPeriodos(dto: CreateTraPeriodosDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllTraPeriodos(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneTraPeriodos(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateTraPeriodos(id: string, dto: UpdateTraPeriodosDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
