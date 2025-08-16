import { Controller } from '@nestjs/common';
import { ConfigUbicacion } from '../entities/config-ubicacion.entity';
import { CreateConfigUbicacionDto } from '../dto/create-config-ubicacion.dto';
import { UpdateConfigUbicacionDto } from '../dto/update-config-ubicacion.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ConfigUbicacionService } from '../services/config-ubicacion.service';

@Controller('config-ubicacion')
export class ConfigUbicacionController extends BaseController<
  ConfigUbicacion,
  CreateConfigUbicacionDto,
  UpdateConfigUbicacionDto
>('CONFIG_UBICACION', CreateConfigUbicacionDto, UpdateConfigUbicacionDto) {
  constructor(service: ConfigUbicacionService) {
    super(service);
  }
}
