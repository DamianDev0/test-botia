import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraModelos } from '../entities/tra-modelos.entity';
import { CreateTraModelosDto } from '../dto/create-tra-modelos.dto';
import { UpdateTraModelosDto } from '../dto/update-tra-modelos.dto';

@Injectable()
export class TraModelosService extends BaseAuthenticatedService<TraModelos> {
  private readonly entityName = 'tra_modelos';

  constructor(
    @InjectRepository(TraModelos)
    repository: Repository<TraModelos>,
  ) {
    super(repository);
  }

  async createTraModelos(dto: CreateTraModelosDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllTraModelos(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneTraModelos(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateTraModelos(id: string, dto: UpdateTraModelosDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
