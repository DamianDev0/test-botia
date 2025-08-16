import { PartialType } from '@nestjs/swagger';
import { CreateMotivosAnulacionDto } from './create-motivos-anulacion.dto';

export class UpdateMotivosAnulacionDto extends PartialType(CreateMotivosAnulacionDto) {}
