import { PartialType } from '@nestjs/swagger';
import { CreateTraDetallesDto } from './create-tra-detalles.dto';

export class UpdateTraDetallesDto extends PartialType(CreateTraDetallesDto) {}
