import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { TraReferenciasProveedor } from '../entities/tra-referencias-proveedor.entity';
import { CreateTraReferenciasProveedorDto } from '../dto/create-tra-referencias-proveedor.dto';
import { UpdateTraReferenciasProveedorDto } from '../dto/update-tra-referencias-proveedor.dto';

@Injectable()
export class TraReferenciasProveedorService extends BaseAuthenticatedService<TraReferenciasProveedor> {
  private readonly entityName = 'tra_referencias_proveedor';

  constructor(
    @InjectRepository(TraReferenciasProveedor)
    repository: Repository<TraReferenciasProveedor>,
  ) {
    super(repository);
  }

  async createTraReferenciasProveedor(dto: CreateTraReferenciasProveedorDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllTraReferenciasProveedor(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneTraReferenciasProveedor(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateTraReferenciasProveedor(id: string, dto: UpdateTraReferenciasProveedorDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
