import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { DetalleCeldas } from '../entities/detalle-celdas.entity';
import { CreateDetalleCeldasDto } from '../dto/create-detalle-celdas.dto';
import { UpdateDetalleCeldasDto } from '../dto/update-detalle-celdas.dto';

@Injectable()
export class DetalleCeldasService extends BaseAuthenticatedService<DetalleCeldas> {
  private readonly entityName = 'DETALLE_CELDAS';

  constructor(
    @InjectRepository(DetalleCeldas)
    repository: Repository<DetalleCeldas>,
  ) {
    super(repository);
  }

  async createDetalleCeldas(dto: CreateDetalleCeldasDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllDetalleCeldas(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneDetalleCeldas(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateDetalleCeldas(id: string, dto: UpdateDetalleCeldasDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
