import { PartialType } from '@nestjs/swagger';
import { CreateTablasDto } from './create-tablas.dto';

export class UpdateTablasDto extends PartialType(CreateTablasDto) {}
