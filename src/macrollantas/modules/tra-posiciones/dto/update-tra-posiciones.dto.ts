import { PartialType } from '@nestjs/swagger';
import { CreateTraPosicionesDto } from './create-tra-posiciones.dto';

export class UpdateTraPosicionesDto extends PartialType(CreateTraPosicionesDto) {}
