import { PartialType } from '@nestjs/swagger';
import { CreateTraPartesDto } from './create-tra-partes.dto';

export class UpdateTraPartesDto extends PartialType(CreateTraPartesDto) {}
