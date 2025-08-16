import { PartialType } from '@nestjs/swagger';
import { CreateTecnicosDto } from './create-tecnicos.dto';

export class UpdateTecnicosDto extends PartialType(CreateTecnicosDto) {}
