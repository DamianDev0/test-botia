import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraCotizacion } from '../entities/tra-cotizacion.entity';
import { CreateTraCotizacionDto } from '../dto/create-tra-cotizacion.dto';
import { UpdateTraCotizacionDto } from '../dto/update-tra-cotizacion.dto';

@Injectable()
export class TraCotizacionService extends BaseAuthenticatedService<TraCotizacion> {
  private readonly entityName = 'tra_cotizacion';

  constructor(
    @InjectRepository(TraCotizacion)
    repository: Repository<TraCotizacion>,
  ) {
    super(repository);
  }

  async createTraCotizacion(dto: CreateTraCotizacionDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllTraCotizacion(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneTraCotizacion(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateTraCotizacion(id: string, dto: UpdateTraCotizacionDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
