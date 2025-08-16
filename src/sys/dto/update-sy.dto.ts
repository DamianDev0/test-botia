import { PartialType } from '@nestjs/swagger';
import { CreateSysAppDto } from './create-sys-app.dto';
import { CreateSysMenuDto } from './create-sys-menu.dto';
import { CreateSysRoleDto } from './create-sys-role.dto';
import { CreateSysSubmenuDto } from './create-sys-submenu.dto';

export class UpdateSysAppDto extends PartialType(CreateSysAppDto) {}

export class UpdateSysRoleDto extends PartialType(CreateSysRoleDto) {}

export class UpdateSysMenuDto extends PartialType(CreateSysMenuDto) {}

export class UpdateSysSubmenuDto extends PartialType(CreateSysSubmenuDto) {}
