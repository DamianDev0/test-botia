import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { Pedidos } from '../entities/pedidos.entity';
import { CreatePedidosDto } from '../dto/create-pedidos.dto';
import { UpdatePedidosDto } from '../dto/update-pedidos.dto';

@Injectable()
export class PedidosService extends BaseAuthenticatedService<Pedidos> {
  private readonly entityName = 'pedidos';

  constructor(
    @InjectRepository(Pedidos)
    repository: Repository<Pedidos>,
  ) {
    super(repository);
  }

  async createPedidos(dto: CreatePedidosDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllPedidos(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOnePedidos(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updatePedidos(id: string, dto: UpdatePedidosDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
