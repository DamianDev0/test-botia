import { PartialType } from '@nestjs/swagger';
import { CreateTraMatriculasDto } from './create-tra-matriculas.dto';

export class UpdateTraMatriculasDto extends PartialType(CreateTraMatriculasDto) {}
