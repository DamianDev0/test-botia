import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraProcesos } from '../entities/tra-procesos.entity';
import { CreateTraProcesosDto } from '../dto/create-tra-procesos.dto';
import { UpdateTraProcesosDto } from '../dto/update-tra-procesos.dto';

@Injectable()
export class TraProcesosService extends BaseAuthenticatedService<TraProcesos> {
  private readonly entityName = 'tra_procesos';

  constructor(
    @InjectRepository(TraProcesos)
    repository: Repository<TraProcesos>,
  ) {
    super(repository);
  }

  async createTraProcesos(dto: CreateTraProcesosDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllTraProcesos(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneTraProcesos(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateTraProcesos(id: string, dto: UpdateTraProcesosDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
