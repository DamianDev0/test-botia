import { PartialType } from '@nestjs/swagger';
import { CreateSeeFormulasDto } from './create-see-formulas.dto';

export class UpdateSeeFormulasDto extends PartialType(CreateSeeFormulasDto) {}
