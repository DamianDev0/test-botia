import { Controller } from '@nestjs/common';
import { ConfigCapturaDet } from '../entities/config-captura-det.entity';
import { CreateConfigCapturaDetDto } from '../dto/create-config-captura-det.dto';
import { UpdateConfigCapturaDetDto } from '../dto/update-config-captura-det.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ConfigCapturaDetService } from '../services/config-captura-det.service';

@Controller('config-captura-det')
export class ConfigCapturaDetController extends BaseController<
  ConfigCapturaDet,
  CreateConfigCapturaDetDto,
  UpdateConfigCapturaDetDto
>('CONFIG_CAPTURA_DET', CreateConfigCapturaDetDto, UpdateConfigCapturaDetDto) {
  constructor(service: ConfigCapturaDetService) {
    super(service);
  }
}
