import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraMovtosTot } from '../entities/tra-movtos-tot.entity';
import { CreateTraMovtosTotDto } from '../dto/create-tra-movtos-tot.dto';
import { UpdateTraMovtosTotDto } from '../dto/update-tra-movtos-tot.dto';

@Injectable()
export class TraMovtosTotService extends BaseAuthenticatedService<TraMovtosTot> {
  private readonly entityName = 'tra_movtos_tot';

  constructor(
    @InjectRepository(TraMovtosTot)
    repository: Repository<TraMovtosTot>,
  ) {
    super(repository);
  }

  async createTraMovtosTot(dto: CreateTraMovtosTotDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllTraMovtosTot(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneTraMovtosTot(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateTraMovtosTot(id: string, dto: UpdateTraMovtosTotDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
