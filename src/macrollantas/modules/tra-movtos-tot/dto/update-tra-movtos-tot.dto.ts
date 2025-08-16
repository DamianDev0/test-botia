import { PartialType } from '@nestjs/swagger';
import { CreateTraMovtosTotDto } from './create-tra-movtos-tot.dto';

export class UpdateTraMovtosTotDto extends PartialType(CreateTraMovtosTotDto) {}
