import { PartialType } from '@nestjs/swagger';
import { CreateTraMatriculasCarDto } from './create-tra-matriculas-car.dto';

export class UpdateTraMatriculasCarDto extends PartialType(CreateTraMatriculasCarDto) {}
