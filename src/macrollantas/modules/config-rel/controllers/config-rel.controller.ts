import { Controller } from '@nestjs/common';
import { ConfigRel } from '../entities/config-rel.entity';
import { CreateConfigRelDto } from '../dto/create-config-rel.dto';
import { UpdateConfigRelDto } from '../dto/update-config-rel.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ConfigRelService } from '../services/config-rel.service';

@Controller('config-rel')
export class ConfigRelController extends BaseController<
  ConfigRel,
  CreateConfigRelDto,
  UpdateConfigRelDto
>('CONFIG_REL', CreateConfigRelDto, UpdateConfigRelDto) {
  constructor(service: ConfigRelService) {
    super(service);
  }
}
