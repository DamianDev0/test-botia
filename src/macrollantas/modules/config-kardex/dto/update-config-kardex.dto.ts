import { PartialType } from '@nestjs/swagger';
import { CreateConfigKardexDto } from './create-config-kardex.dto';

export class UpdateConfigKardexDto extends PartialType(CreateConfigKardexDto) {}
