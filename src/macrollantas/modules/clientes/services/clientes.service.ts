import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Clientes } from '../entities/clientes.entity';
import { CreateClientesDto } from '../dto/create-clientes.dto';
import { UpdateClientesDto } from '../dto/update-clientes.dto';

@Injectable()
export class ClientesService extends BaseAuthenticatedService<Clientes> {
  private readonly entityName = 'clientes';

  constructor(
    @InjectRepository(Clientes)
    repository: Repository<Clientes>,
  ) {
    super(repository);
  }

  async createClientes(dto: CreateClientesDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllClientes(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOneClientes(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updateClientes(id: string, dto: UpdateClientesDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
