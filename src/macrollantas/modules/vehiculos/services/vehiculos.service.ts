import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Vehiculos } from '../entities/vehiculos.entity';
import { CreateVehiculosDto } from '../dto/create-vehiculos.dto';
import { UpdateVehiculosDto } from '../dto/update-vehiculos.dto';

@Injectable()
export class VehiculosService extends BaseAuthenticatedService<Vehiculos> {
  private readonly entityName = 'vehiculos';

  constructor(
    @InjectRepository(Vehiculos)
    repository: Repository<Vehiculos>,
  ) {
    super(repository);
  }

  async createVehiculos(dto: CreateVehiculosDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllVehiculos(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneVehiculos(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateVehiculos(id: string, dto: UpdateVehiculosDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
