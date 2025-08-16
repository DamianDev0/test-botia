import { PartialType } from '@nestjs/swagger';
import { CreateTemporadasDto } from './create-temporadas.dto';

export class UpdateTemporadasDto extends PartialType(CreateTemporadasDto) {}
