import { PartialType } from '@nestjs/swagger';
import { CreateConceptosDto } from './create-conceptos.dto';

export class UpdateConceptosDto extends PartialType(CreateConceptosDto) {}
