import { PartialType } from '@nestjs/swagger';
import { CreatePedidosDto } from './create-pedidos.dto';

export class UpdatePedidosDto extends PartialType(CreatePedidosDto) {}
