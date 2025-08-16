import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraProcesosTiemposColores } from '../entities/tra-procesos-tiempos-colores.entity';
import { CreateTraProcesosTiemposColoresDto } from '../dto/create-tra-procesos-tiempos-colores.dto';
import { UpdateTraProcesosTiemposColoresDto } from '../dto/update-tra-procesos-tiempos-colores.dto';

@Injectable()
export class TraProcesosTiemposColoresService extends BaseAuthenticatedService<TraProcesosTiemposColores> {
  private readonly entityName = 'tra_procesos_tiempos_colores';

  constructor(
    @InjectRepository(TraProcesosTiemposColores)
    repository: Repository<TraProcesosTiemposColores>,
  ) {
    super(repository);
  }

  async createTraProcesosTiemposColores(dto: CreateTraProcesosTiemposColoresDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllTraProcesosTiemposColores(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneTraProcesosTiemposColores(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateTraProcesosTiemposColores(id: string, dto: UpdateTraProcesosTiemposColoresDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
