import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraMovtos } from '../entities/tra-movtos.entity';
import { CreateTraMovtosDto } from '../dto/create-tra-movtos.dto';
import { UpdateTraMovtosDto } from '../dto/update-tra-movtos.dto';

@Injectable()
export class TraMovtosService extends BaseAuthenticatedService<TraMovtos> {
  private readonly entityName = 'tra_movtos';

  constructor(
    @InjectRepository(TraMovtos)
    repository: Repository<TraMovtos>,
  ) {
    super(repository);
  }

  async createTraMovtos(dto: CreateTraMovtosDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllTraMovtos(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneTraMovtos(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateTraMovtos(id: string, dto: UpdateTraMovtosDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
