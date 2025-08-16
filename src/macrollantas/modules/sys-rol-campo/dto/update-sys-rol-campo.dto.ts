import { PartialType } from '@nestjs/swagger';
import { CreateSysRolCampoDto } from './create-sys-rol-campo.dto';

export class UpdateSysRolCampoDto extends PartialType(CreateSysRolCampoDto) {}
