import { PartialType } from '@nestjs/swagger';
import { CreateCuestionariosDto } from './create-cuestionarios.dto';

export class UpdateCuestionariosDto extends PartialType(CreateCuestionariosDto) {}
