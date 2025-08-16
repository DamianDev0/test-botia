import { Controller } from '@nestjs/common';
import { Pedidos } from '../entities/pedidos.entity';
import { CreatePedidosDto } from '../dto/create-pedidos.dto';
import { UpdatePedidosDto } from '../dto/update-pedidos.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { PedidosService } from '../services/pedidos.service';

@Controller('pedidos')
export class PedidosController extends BaseController<
  Pedidos,
  CreatePedidosDto,
  UpdatePedidosDto
>('pedidos', CreatePedidosDto, UpdatePedidosDto) {
  constructor(service: PedidosService) {
    super(service);
  }
}
