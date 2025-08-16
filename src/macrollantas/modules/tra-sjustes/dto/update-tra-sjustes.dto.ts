import { PartialType } from '@nestjs/swagger';
import { CreateTraSjustesDto } from './create-tra-sjustes.dto';

export class UpdateTraSjustesDto extends PartialType(CreateTraSjustesDto) {}
