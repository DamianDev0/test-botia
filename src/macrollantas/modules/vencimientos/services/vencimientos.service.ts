import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Vencimientos } from '../entities/vencimientos.entity';
import { CreateVencimientosDto } from '../dto/create-vencimientos.dto';
import { UpdateVencimientosDto } from '../dto/update-vencimientos.dto';

@Injectable()
export class VencimientosService extends BaseAuthenticatedService<Vencimientos> {
  private readonly entityName = 'VENCIMIENTOS';

  constructor(
    @InjectRepository(Vencimientos)
    repository: Repository<Vencimientos>,
  ) {
    super(repository);
  }

  async createVencimientos(dto: CreateVencimientosDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllVencimientos(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneVencimientos(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateVencimientos(id: string, dto: UpdateVencimientosDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
