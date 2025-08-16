import { Controller } from '@nestjs/common';
import { ConfigDetalle } from '../entities/config-detalle.entity';
import { CreateConfigDetalleDto } from '../dto/create-config-detalle.dto';
import { UpdateConfigDetalleDto } from '../dto/update-config-detalle.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ConfigDetalleService } from '../services/config-detalle.service';

@Controller('config-detalle')
export class ConfigDetalleController extends BaseController<
  ConfigDetalle,
  CreateConfigDetalleDto,
  UpdateConfigDetalleDto
>('CONFIG_DETALLE', CreateConfigDetalleDto, UpdateConfigDetalleDto) {
  constructor(service: ConfigDetalleService) {
    super(service);
  }
}
