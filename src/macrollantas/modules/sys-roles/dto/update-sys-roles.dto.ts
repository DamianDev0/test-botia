import { PartialType } from '@nestjs/swagger';
import { CreateSysRolesDto } from './create-sys-roles.dto';

export class UpdateSysRolesDto extends PartialType(CreateSysRolesDto) {}
