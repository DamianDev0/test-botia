import { Controller } from '@nestjs/common';
import { ConfigBd } from '../entities/config-bd.entity';
import { CreateConfigBdDto } from '../dto/create-config-bd.dto';
import { UpdateConfigBdDto } from '../dto/update-config-bd.dto';
import { ConfigBdService } from '../services/config-bd.service';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';

@Controller('config-bd')
export class ConfigBdController extends BaseController<
  ConfigBd,
  CreateConfigBdDto,
  UpdateConfigBdDto
>('CONFIG_BD', CreateConfigBdDto, UpdateConfigBdDto) {
  constructor(service: ConfigBdService) {
    super(service);
  }
}
