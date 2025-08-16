import { PartialType } from '@nestjs/swagger';
import { CreateCuestionariosRDto } from './create-cuestionarios-r.dto';

export class UpdateCuestionariosRDto extends PartialType(CreateCuestionariosRDto) {}
