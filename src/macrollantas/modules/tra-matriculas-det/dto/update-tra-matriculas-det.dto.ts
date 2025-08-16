import { PartialType } from '@nestjs/swagger';
import { CreateTraMatriculasDetDto } from './create-tra-matriculas-det.dto';

export class UpdateTraMatriculasDetDto extends PartialType(CreateTraMatriculasDetDto) {}
