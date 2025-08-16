import { PartialType } from '@nestjs/swagger';
import { CreateVersionesDto } from './create-versiones.dto';

export class UpdateVersionesDto extends PartialType(CreateVersionesDto) {}
