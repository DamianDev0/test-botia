import { PartialType } from '@nestjs/swagger';
import { CreateSysAppsDto } from './create-sys-apps.dto';

export class UpdateSysAppsDto extends PartialType(CreateSysAppsDto) {}
