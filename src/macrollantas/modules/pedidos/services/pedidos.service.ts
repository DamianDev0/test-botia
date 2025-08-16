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

  async createPedidos(dto: CreatePedidosDto, key: string) {
    return this.createWithAuth(dto, key, this.entityName);
  }

  async findAllPedidos(key: string) {
    return this.findAllWithAuth(key, this.entityName);
  }

  async findOnePedidos(id: string, key: string) {
    return this.findOneWithAuth(id, key, this.entityName);
  }

  async updatePedidos(id: string, dto: UpdatePedidosDto, key: string) {
    return this.updateWithAuth(id, dto, key, this.entityName);
  }
}
