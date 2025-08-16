import { PartialType } from '@nestjs/swagger';
import { CreateConfigTargetaDto } from './create-config-targeta.dto';

export class UpdateConfigTargetaDto extends PartialType(CreateConfigTargetaDto) {}
