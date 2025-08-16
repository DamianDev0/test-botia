import { PartialType } from '@nestjs/swagger';
import { CreateTraUbicacionesDto } from './create-tra-ubicaciones.dto';

export class UpdateTraUbicacionesDto extends PartialType(CreateTraUbicacionesDto) {}
