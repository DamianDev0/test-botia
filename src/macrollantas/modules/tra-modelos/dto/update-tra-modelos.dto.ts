import { PartialType } from '@nestjs/swagger';
import { CreateTraModelosDto } from './create-tra-modelos.dto';

export class UpdateTraModelosDto extends PartialType(CreateTraModelosDto) {}
