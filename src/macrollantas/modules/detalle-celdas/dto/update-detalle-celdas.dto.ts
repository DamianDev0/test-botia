import { PartialType } from '@nestjs/swagger';
import { CreateDetalleCeldasDto } from './create-detalle-celdas.dto';

export class UpdateDetalleCeldasDto extends PartialType(CreateDetalleCeldasDto) {}
