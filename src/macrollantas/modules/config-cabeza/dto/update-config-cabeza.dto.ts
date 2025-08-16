import { PartialType } from '@nestjs/swagger';
import { CreateConfigCabezaDto } from './create-config-cabeza.dto';

export class UpdateConfigCabezaDto extends PartialType(CreateConfigCabezaDto) {}
