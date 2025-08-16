import { PartialType } from '@nestjs/swagger';
import { CreateVencimientosDto } from './create-vencimientos.dto';

export class UpdateVencimientosDto extends PartialType(CreateVencimientosDto) {}
