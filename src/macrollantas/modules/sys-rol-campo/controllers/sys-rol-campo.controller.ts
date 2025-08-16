import { Controller } from '@nestjs/common';
import { SysRolCampo } from '../entities/sys-rol-campo.entity';
import { CreateSysRolCampoDto } from '../dto/create-sys-rol-campo.dto';
import { UpdateSysRolCampoDto } from '../dto/update-sys-rol-campo.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { SysRolCampoService } from '../services/sys-rol-campo.service';

@Controller('sys-rol-campo')
export class SysRolCampoController extends BaseController<
  SysRolCampo,
  CreateSysRolCampoDto,
  UpdateSysRolCampoDto
>('SYS_ROL_CAMPO', CreateSysRolCampoDto, UpdateSysRolCampoDto) {
  constructor(service: SysRolCampoService) {
    super(service);
  }
}
