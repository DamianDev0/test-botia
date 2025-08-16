import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraCotizacionTot } from '../entities/tra-cotizacion-tot.entity';
import { CreateTraCotizacionTotDto } from '../dto/create-tra-cotizacion-tot.dto';
import { UpdateTraCotizacionTotDto } from '../dto/update-tra-cotizacion-tot.dto';

@Injectable()
export class TraCotizacionTotService extends BaseAuthenticatedService<TraCotizacionTot> {
  private readonly entityName = 'tra_cotizacion_tot';

  constructor(
    @InjectRepository(TraCotizacionTot)
    repository: Repository<TraCotizacionTot>,
  ) {
    super(repository);
  }

  async createTraCotizacionTot(dto: CreateTraCotizacionTotDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllTraCotizacionTot(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneTraCotizacionTot(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateTraCotizacionTot(id: string, dto: UpdateTraCotizacionTotDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
