import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Presupuestos } from '../entities/presupuestos.entity';
import { CreatePresupuestosDto } from '../dto/create-presupuestos.dto';
import { UpdatePresupuestosDto } from '../dto/update-presupuestos.dto';

@Injectable()
export class PresupuestosService extends BaseAuthenticatedService<Presupuestos> {
  private readonly entityName = 'PRESUPUESTOS';

  constructor(
    @InjectRepository(Presupuestos)
    repository: Repository<Presupuestos>,
  ) {
    super(repository);
  }

  async createPresupuestos(dto: CreatePresupuestosDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllPresupuestos(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOnePresupuestos(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updatePresupuestos(id: string, dto: UpdatePresupuestosDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
