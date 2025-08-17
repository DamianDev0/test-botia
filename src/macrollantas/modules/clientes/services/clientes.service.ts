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

  async createClientes(dto: CreateClientesDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllClientes(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOneClientes(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updateClientes(id: string, dto: UpdateClientesDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
