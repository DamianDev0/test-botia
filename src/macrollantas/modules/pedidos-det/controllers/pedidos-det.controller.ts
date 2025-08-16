import { Controller } from '@nestjs/common';
import { PedidosDet } from '../entities/pedidos-det.entity';
import { CreatePedidosDetDto } from '../dto/create-pedidos-det.dto';
import { UpdatePedidosDetDto } from '../dto/update-pedidos-det.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { PedidosDetService } from '../services/pedidos-det.service';

@Controller('pedidos-det')
export class PedidosDetController extends BaseController<
  PedidosDet,
  CreatePedidosDetDto,
  UpdatePedidosDetDto
>('pedidos_det', CreatePedidosDetDto, UpdatePedidosDetDto) {
  constructor(service: PedidosDetService) {
    super(service);
  }
}
