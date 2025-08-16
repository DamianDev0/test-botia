import { PartialType } from '@nestjs/swagger';
import { CreateConfigVistaDto } from './create-config-vista.dto';

export class UpdateConfigVistaDto extends PartialType(CreateConfigVistaDto) {}
