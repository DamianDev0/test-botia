import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraDetalles } from '../entities/tra-detalles.entity';
import { CreateTraDetallesDto } from '../dto/create-tra-detalles.dto';
import { UpdateTraDetallesDto } from '../dto/update-tra-detalles.dto';

@Injectable()
export class TraDetallesService extends BaseAuthenticatedService<TraDetalles> {
  private readonly entityName = 'tra_detalles';

  constructor(
    @InjectRepository(TraDetalles)
    repository: Repository<TraDetalles>,
  ) {
    super(repository);
  }

  async createTraDetalles(dto: CreateTraDetallesDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllTraDetalles(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneTraDetalles(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateTraDetalles(id: string, dto: UpdateTraDetallesDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
