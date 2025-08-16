import { Controller } from '@nestjs/common';
import { SysApps } from '../entities/sys-apps.entity';
import { CreateSysAppsDto } from '../dto/create-sys-apps.dto';
import { UpdateSysAppsDto } from '../dto/update-sys-apps.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { SysAppsService } from '../services/sys-apps.service';

@Controller('sys-apps')
export class SysAppsController extends BaseController<
  SysApps,
  CreateSysAppsDto,
  UpdateSysAppsDto
>('SYS_APPS', CreateSysAppsDto, UpdateSysAppsDto) {
  constructor(service: SysAppsService) {
    super(service);
  }
}
