import { Controller } from '@nestjs/common';
import { SysRoles } from '../entities/sys-roles.entity';
import { CreateSysRolesDto } from '../dto/create-sys-roles.dto';
import { UpdateSysRolesDto } from '../dto/update-sys-roles.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { SysRolesService } from '../services/sys-roles.service';

@Controller('sys-roles')
export class SysRolesController extends BaseController<
  SysRoles,
  CreateSysRolesDto,
  UpdateSysRolesDto
>('SYS_ROLES', CreateSysRolesDto, UpdateSysRolesDto) {
  constructor(service: SysRolesService) {
    super(service);
  }
}
