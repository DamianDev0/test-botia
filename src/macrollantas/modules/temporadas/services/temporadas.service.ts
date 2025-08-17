import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Temporadas } from '../entities/temporadas.entity';
import { CreateTemporadasDto } from '../dto/create-temporadas.dto';
import { UpdateTemporadasDto } from '../dto/update-temporadas.dto';

@Injectable()
export class TemporadasService extends BaseAuthenticatedService<Temporadas> {
  private readonly entityName = 'TEMPORADAS';

  constructor(
    @InjectRepository(Temporadas)
    repository: Repository<Temporadas>,
  ) {
    super(repository);
  }

  async createTemporadas(dto: CreateTemporadasDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllTemporadas(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneTemporadas(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateTemporadas(id: string, dto: UpdateTemporadasDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
