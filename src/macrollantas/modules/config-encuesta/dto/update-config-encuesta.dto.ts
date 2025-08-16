import { PartialType } from '@nestjs/swagger';
import { CreateConfigEncuestaDto } from './create-config-encuesta.dto';

export class UpdateConfigEncuestaDto extends PartialType(CreateConfigEncuestaDto) {}
