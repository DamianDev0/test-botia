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

  async createSeePeriodos(dto: CreateSeePeriodosDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllSeePeriodos(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneSeePeriodos(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateSeePeriodos(id: string, dto: UpdateSeePeriodosDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
