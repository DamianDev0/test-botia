import { PartialType } from '@nestjs/swagger';
import { CreateCeldasDto } from './create-celdas.dto';

export class UpdateCeldasDto extends PartialType(CreateCeldasDto) {}
