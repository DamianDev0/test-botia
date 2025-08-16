import { PartialType } from '@nestjs/swagger';
import { CreateTraPlantillasDto } from './create-tra-plantillas.dto';

export class UpdateTraPlantillasDto extends PartialType(CreateTraPlantillasDto) {}
