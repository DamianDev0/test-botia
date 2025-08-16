import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraProcesosTiempos } from '../entities/tra-procesos-tiempos.entity';
import { CreateTraProcesosTiemposDto } from '../dto/create-tra-procesos-tiempos.dto';
import { UpdateTraProcesosTiemposDto } from '../dto/update-tra-procesos-tiempos.dto';

@Injectable()
export class TraProcesosTiemposService extends BaseAuthenticatedService<TraProcesosTiempos> {
  private readonly entityName = 'tra_procesos_tiempos';

  constructor(
    @InjectRepository(TraProcesosTiempos)
    repository: Repository<TraProcesosTiempos>,
  ) {
    super(repository);
  }

  async createTraProcesosTiempos(dto: CreateTraProcesosTiemposDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllTraProcesosTiempos(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneTraProcesosTiempos(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateTraProcesosTiempos(id: string, dto: UpdateTraProcesosTiemposDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
