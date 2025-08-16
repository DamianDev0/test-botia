import { PartialType } from '@nestjs/swagger';
import { CreateConfigRelDto } from './create-config-rel.dto';

export class UpdateConfigRelDto extends PartialType(CreateConfigRelDto) {}
