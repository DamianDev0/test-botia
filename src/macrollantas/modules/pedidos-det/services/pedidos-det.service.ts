import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAuthenticatedService } from 'src/macrollantas/common/services/base-authenticated.service';
import { PedidosDet } from '../entities/pedidos-det.entity';
import { CreatePedidosDetDto } from '../dto/create-pedidos-det.dto';
import { UpdatePedidosDetDto } from '../dto/update-pedidos-det.dto';

@Injectable()
export class PedidosDetService extends BaseAuthenticatedService<PedidosDet> {
  private readonly entityName = 'pedidos_det';

  constructor(
    @InjectRepository(PedidosDet)
    repository: Repository<PedidosDet>,
  ) {
    super(repository);
  }

  async createPedidosDet(dto: CreatePedidosDetDto, key: string, schema = 'public') {
    return this.createWithAuth(dto, key, this.entityName, schema);
  }

  async findAllPedidosDet(key: string, schema = 'public') {
    return this.findAllWithAuth(key, this.entityName, schema);
  }

  async findOnePedidosDet(id: string, key: string, schema = 'public') {
    return this.findOneWithAuth(id, key, this.entityName, schema);
  }

  async updatePedidosDet(id: string, dto: UpdatePedidosDetDto, key: string, schema = 'public') {
    return this.updateWithAuth(id, dto, key, this.entityName, schema);
  }
}
