import { PartialType } from '@nestjs/swagger';
import { CreatePreguntasDto } from './create-preguntas.dto';

export class UpdatePreguntasDto extends PartialType(CreatePreguntasDto) {}
