import { Controller } from '@nestjs/common';
import { SysSubmenus } from '../entities/sys-submenus.entity';
import { CreateSysSubmenusDto } from '../dto/create-sys-submenus.dto';
import { UpdateSysSubmenusDto } from '../dto/update-sys-submenus.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { SysSubmenusService } from '../services/sys-submenus.service';

@Controller('sys-submenus')
export class SysSubmenusController extends BaseController<
  SysSubmenus,
  CreateSysSubmenusDto,
  UpdateSysSubmenusDto
>('SYS_SUBMENUS', CreateSysSubmenusDto, UpdateSysSubmenusDto) {
  constructor(service: SysSubmenusService) {
    super(service);
  }
}
