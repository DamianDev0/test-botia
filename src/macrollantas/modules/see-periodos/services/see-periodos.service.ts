import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { SeePeriodos } from '../entities/see-periodos.entity';
import { CreateSeePeriodosDto } from '../dto/create-see-periodos.dto';
import { UpdateSeePeriodosDto } from '../dto/update-see-periodos.dto';

@Injectable()
export class SeePeriodosService extends BaseAuthenticatedService<SeePeriodos> {
  private readonly entityName = 'see_periodos';

  constructor(
    @InjectRepository(SeePeriodos)
    repository: Repository<SeePeriodos>,
  ) {
    super(repository);
  }

  async createSeePeriodos(dto: CreateSeePeriodosDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllSeePeriodos(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneSeePeriodos(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateSeePeriodos(id: string, dto: UpdateSeePeriodosDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
