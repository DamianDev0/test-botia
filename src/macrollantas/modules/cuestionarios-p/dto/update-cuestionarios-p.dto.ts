import { PartialType } from '@nestjs/swagger';
import { CreateCuestionariosPDto } from './create-cuestionarios-p.dto';

export class UpdateCuestionariosPDto extends PartialType(CreateCuestionariosPDto) {}
