import { PartialType } from '@nestjs/swagger';
import { CreateConfigUbicacionDto } from './create-config-ubicacion.dto';

export class UpdateConfigUbicacionDto extends PartialType(CreateConfigUbicacionDto) {}
