import { PartialType } from '@nestjs/swagger';
import { CreateConfigDetalleDto } from './create-config-detalle.dto';

export class UpdateConfigDetalleDto extends PartialType(CreateConfigDetalleDto) {}
