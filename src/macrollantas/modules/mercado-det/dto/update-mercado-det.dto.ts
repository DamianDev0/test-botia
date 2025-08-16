import { PartialType } from '@nestjs/swagger';
import { CreateMercadoDetDto } from './create-mercado-det.dto';

export class UpdateMercadoDetDto extends PartialType(CreateMercadoDetDto) {}
