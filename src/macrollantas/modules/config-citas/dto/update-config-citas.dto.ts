import { PartialType } from '@nestjs/swagger';
import { CreateConfigCitasDto } from './create-config-citas.dto';

export class UpdateConfigCitasDto extends PartialType(CreateConfigCitasDto) {}
