import { Controller } from '@nestjs/common';
import { Config } from '../entities/config.entity';
import { CreateConfigDto } from '../dto/create-config.dto';
import { UpdateConfigDto } from '../dto/update-config.dto';
import { ConfigService } from '../services/config.service';
import { BaseController } from '../../../common/controllers/base-controller.controller';

@Controller('config')
export class ConfigController extends BaseController<
  Config,
  CreateConfigDto,
  UpdateConfigDto
>('Config', CreateConfigDto, UpdateConfigDto) {
  constructor(service: ConfigService) {
    super(service);
  }
}
