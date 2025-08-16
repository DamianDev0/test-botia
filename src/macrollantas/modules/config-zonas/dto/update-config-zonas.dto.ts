import { PartialType } from '@nestjs/swagger';
import { CreateConfigZonasDto } from './create-config-zonas.dto';

export class UpdateConfigZonasDto extends PartialType(CreateConfigZonasDto) {}
