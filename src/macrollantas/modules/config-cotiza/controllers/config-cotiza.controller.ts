import { Controller } from '@nestjs/common';
import { ConfigCotiza } from '../entities/config-cotiza.entity';
import { CreateConfigCotizaDto } from '../dto/create-config-cotiza.dto';
import { UpdateConfigCotizaDto } from '../dto/update-config-cotiza.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ConfigCotizaService } from '../services/config-cotiza.service';

@Controller('config-cotiza')
export class ConfigCotizaController extends BaseController<
  ConfigCotiza,
  CreateConfigCotizaDto,
  UpdateConfigCotizaDto
>('CONFIG_COTIZA', CreateConfigCotizaDto, UpdateConfigCotizaDto) {
  constructor(service: ConfigCotizaService) {
    super(service);
  }
}
