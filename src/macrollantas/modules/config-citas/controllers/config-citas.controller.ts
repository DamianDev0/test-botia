import { Controller } from '@nestjs/common';
import { ConfigCitas } from '../entities/config-citas.entity';
import { CreateConfigCitasDto } from '../dto/create-config-citas.dto';
import { UpdateConfigCitasDto } from '../dto/update-config-citas.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ConfigCitasService } from '../services/config-citas.service';

@Controller('config-citas')
export class ConfigCitasController extends BaseController<
  ConfigCitas,
  CreateConfigCitasDto,
  UpdateConfigCitasDto
>('CONFIG_CITAS', CreateConfigCitasDto, UpdateConfigCitasDto) {
  constructor(service: ConfigCitasService) {
    super(service);
  }
}
