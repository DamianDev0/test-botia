import { PartialType } from '@nestjs/swagger';
import { CreateSeeVariablesDto } from './create-see-variables.dto';

export class UpdateSeeVariablesDto extends PartialType(CreateSeeVariablesDto) {}
