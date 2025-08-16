import { PartialType } from '@nestjs/swagger';
import { CreateMercadoDto } from './create-mercado.dto';

export class UpdateMercadoDto extends PartialType(CreateMercadoDto) {}
