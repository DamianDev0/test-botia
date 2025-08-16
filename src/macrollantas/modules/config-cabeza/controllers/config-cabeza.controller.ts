import { Controller } from '@nestjs/common';
import { ConfigCabeza } from '../entities/config-cabeza.entity';
import { CreateConfigCabezaDto } from '../dto/create-config-cabeza.dto';
import { UpdateConfigCabezaDto } from '../dto/update-config-cabeza.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ConfigCabezaService } from '../services/config-cabeza.service';

@Controller('config-cabeza')
export class ConfigCabezaController extends BaseController<
  ConfigCabeza,
  CreateConfigCabezaDto,
  UpdateConfigCabezaDto
>('CONFIG_CABEZA', CreateConfigCabezaDto, UpdateConfigCabezaDto) {
  constructor(service: ConfigCabezaService) {
    super(service);
  }
}
