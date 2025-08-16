import { PartialType } from '@nestjs/swagger';
import { CreatePedidosDetDto } from './create-pedidos-det.dto';

export class UpdatePedidosDetDto extends PartialType(CreatePedidosDetDto) {}
