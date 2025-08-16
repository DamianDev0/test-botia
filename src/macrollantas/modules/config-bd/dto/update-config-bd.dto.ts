import { PartialType } from '@nestjs/swagger';
import { CreateConfigBdDto } from './create-config-bd.dto';

export class UpdateConfigBdDto extends PartialType(CreateConfigBdDto) {}
