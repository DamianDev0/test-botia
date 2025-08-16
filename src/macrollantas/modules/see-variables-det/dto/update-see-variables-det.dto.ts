import { PartialType } from '@nestjs/swagger';
import { CreateSeeVariablesDetDto } from './create-see-variables-det.dto';

export class UpdateSeeVariablesDetDto extends PartialType(CreateSeeVariablesDetDto) {}
