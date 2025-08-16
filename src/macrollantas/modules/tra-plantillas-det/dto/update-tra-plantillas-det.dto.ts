import { PartialType } from '@nestjs/swagger';
import { CreateTraPlantillasDetDto } from './create-tra-plantillas-det.dto';

export class UpdateTraPlantillasDetDto extends PartialType(CreateTraPlantillasDetDto) {}
