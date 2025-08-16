import { Controller } from '@nestjs/common';
import { ConfigTargeta } from '../entities/config-targeta.entity';
import { CreateConfigTargetaDto } from '../dto/create-config-targeta.dto';
import { UpdateConfigTargetaDto } from '../dto/update-config-targeta.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ConfigTargetaService } from '../services/config-targeta.service';

@Controller('config-targeta')
export class ConfigTargetaController extends BaseController<
  ConfigTargeta,
  CreateConfigTargetaDto,
  UpdateConfigTargetaDto
>('CONFIG_TARGETA', CreateConfigTargetaDto, UpdateConfigTargetaDto) {
  constructor(service: ConfigTargetaService) {
    super(service);
  }
}
