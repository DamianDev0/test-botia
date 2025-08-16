import { Controller } from '@nestjs/common';
import { ConfigCaptura } from '../entities/config-captura.entity';
import { CreateConfigCapturaDto } from '../dto/create-config-captura.dto';
import { UpdateConfigCapturaDto } from '../dto/update-config-captura.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ConfigCapturaService } from '../services/config-captura.service';

@Controller('config-captura')
export class ConfigCapturaController extends BaseController<
  ConfigCaptura,
  CreateConfigCapturaDto,
  UpdateConfigCapturaDto
>('CONFIG_CAPTURA', CreateConfigCapturaDto, UpdateConfigCapturaDto) {
  constructor(service: ConfigCapturaService) {
    super(service);
  }
}
