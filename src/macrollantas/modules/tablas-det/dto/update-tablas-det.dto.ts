import { PartialType } from '@nestjs/swagger';
import { CreateTablasDetDto } from './create-tablas-det.dto';

export class UpdateTablasDetDto extends PartialType(CreateTablasDetDto) {}
