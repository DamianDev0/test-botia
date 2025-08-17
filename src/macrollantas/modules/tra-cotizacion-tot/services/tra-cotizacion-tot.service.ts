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

  async createTraCotizacionTot(dto: CreateTraCotizacionTotDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllTraCotizacionTot(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneTraCotizacionTot(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateTraCotizacionTot(id: string, dto: UpdateTraCotizacionTotDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
