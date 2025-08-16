import { Controller } from '@nestjs/common';
import { ConfigKardex } from '../entities/config-kardex.entity';
import { CreateConfigKardexDto } from '../dto/create-config-kardex.dto';
import { UpdateConfigKardexDto } from '../dto/update-config-kardex.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ConfigKardexService } from '../services/config-kardex.service';

@Controller('config-kardex')
export class ConfigKardexController extends BaseController<
  ConfigKardex,
  CreateConfigKardexDto,
  UpdateConfigKardexDto
>('CONFIG_KARDEX', CreateConfigKardexDto, UpdateConfigKardexDto) {
  constructor(service: ConfigKardexService) {
    super(service);
  }
}
