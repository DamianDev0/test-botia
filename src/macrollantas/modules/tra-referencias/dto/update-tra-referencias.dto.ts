import { PartialType } from '@nestjs/swagger';
import { CreateTraReferenciasDto } from './create-tra-referencias.dto';

export class UpdateTraReferenciasDto extends PartialType(CreateTraReferenciasDto) {}
