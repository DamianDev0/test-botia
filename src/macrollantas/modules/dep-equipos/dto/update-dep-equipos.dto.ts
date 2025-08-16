import { PartialType } from '@nestjs/swagger';
import { CreateDepEquiposDto } from './create-dep-equipos.dto';

export class UpdateDepEquiposDto extends PartialType(CreateDepEquiposDto) {}
