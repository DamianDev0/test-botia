import { Controller } from '@nestjs/common';
import { ConfigZonas } from '../entities/config-zonas.entity';
import { CreateConfigZonasDto } from '../dto/create-config-zonas.dto';
import { UpdateConfigZonasDto } from '../dto/update-config-zonas.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ConfigZonasService } from '../services/config-zonas.service';

@Controller('config-zonas')
export class ConfigZonasController extends BaseController<
  ConfigZonas,
  CreateConfigZonasDto,
  UpdateConfigZonasDto
>('CONFIG_ZONAS', CreateConfigZonasDto, UpdateConfigZonasDto) {
  constructor(service: ConfigZonasService) {
    super(service);
  }
}
