import { PartialType } from '@nestjs/swagger';
import { CreateSeeMedicionesDto } from './create-see-mediciones.dto';

export class UpdateSeeMedicionesDto extends PartialType(CreateSeeMedicionesDto) {}
