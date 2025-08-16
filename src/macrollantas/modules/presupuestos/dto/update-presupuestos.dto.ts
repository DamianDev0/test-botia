import { PartialType } from '@nestjs/swagger';
import { CreatePresupuestosDto } from './create-presupuestos.dto';

export class UpdatePresupuestosDto extends PartialType(CreatePresupuestosDto) {}
