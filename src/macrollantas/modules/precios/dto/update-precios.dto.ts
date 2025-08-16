import { PartialType } from '@nestjs/swagger';
import { CreatePreciosDto } from './create-precios.dto';

export class UpdatePreciosDto extends PartialType(CreatePreciosDto) {}
