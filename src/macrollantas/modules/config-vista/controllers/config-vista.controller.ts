import { Controller } from '@nestjs/common';
import { ConfigVista } from '../entities/config-vista.entity';
import { CreateConfigVistaDto } from '../dto/create-config-vista.dto';
import { UpdateConfigVistaDto } from '../dto/update-config-vista.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ConfigVistaService } from '../services/config-vista.service';

@Controller('config-vista')
export class ConfigVistaController extends BaseController<
  ConfigVista,
  CreateConfigVistaDto,
  UpdateConfigVistaDto
>('CONFIG_VISTA', CreateConfigVistaDto, UpdateConfigVistaDto) {
  constructor(service: ConfigVistaService) {
    super(service);
  }
}
