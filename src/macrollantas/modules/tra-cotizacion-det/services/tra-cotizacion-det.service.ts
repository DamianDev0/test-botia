import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraCotizacionDet } from '../entities/tra-cotizacion-det.entity';
import { CreateTraCotizacionDetDto } from '../dto/create-tra-cotizacion-det.dto';
import { UpdateTraCotizacionDetDto } from '../dto/update-tra-cotizacion-det.dto';

@Injectable()
export class TraCotizacionDetService extends BaseAuthenticatedService<TraCotizacionDet> {
  private readonly entityName = 'tra_cotizacion_det';

  constructor(
    @InjectRepository(TraCotizacionDet)
    repository: Repository<TraCotizacionDet>,
  ) {
    super(repository);
  }

  async createTraCotizacionDet(dto: CreateTraCotizacionDetDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllTraCotizacionDet(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneTraCotizacionDet(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateTraCotizacionDet(id: string, dto: UpdateTraCotizacionDetDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
