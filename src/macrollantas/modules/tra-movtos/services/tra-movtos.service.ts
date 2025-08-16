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

  async createTraMovtos(dto: CreateTraMovtosDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllTraMovtos(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneTraMovtos(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateTraMovtos(id: string, dto: UpdateTraMovtosDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
