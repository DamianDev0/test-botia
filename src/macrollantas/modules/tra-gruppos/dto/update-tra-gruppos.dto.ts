import { PartialType } from '@nestjs/swagger';
import { CreateTraGrupposDto } from './create-tra-gruppos.dto';

export class UpdateTraGrupposDto extends PartialType(CreateTraGrupposDto) {}
