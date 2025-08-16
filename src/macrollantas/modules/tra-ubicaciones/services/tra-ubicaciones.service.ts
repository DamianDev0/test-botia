import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraUbicaciones } from '../entities/tra-ubicaciones.entity';
import { CreateTraUbicacionesDto } from '../dto/create-tra-ubicaciones.dto';
import { UpdateTraUbicacionesDto } from '../dto/update-tra-ubicaciones.dto';

@Injectable()
export class TraUbicacionesService extends BaseAuthenticatedService<TraUbicaciones> {
  private readonly entityName = 'tra_ubicaciones';

  constructor(
    @InjectRepository(TraUbicaciones)
    repository: Repository<TraUbicaciones>,
  ) {
    super(repository);
  }

  async createTraUbicaciones(dto: CreateTraUbicacionesDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllTraUbicaciones(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneTraUbicaciones(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateTraUbicaciones(id: string, dto: UpdateTraUbicacionesDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
