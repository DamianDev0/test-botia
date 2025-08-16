import { Controller } from '@nestjs/common';
import { ConfigAutogestion } from '../entities/config-autogestion.entity';
import { CreateConfigAutogestionDto } from '../dto/create-config-autogestion.dto';
import { UpdateConfigAutogestionDto } from '../dto/update-config-autogestion.dto';
import { ConfigAutogestionService } from '../services/config-autogestion.service';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';

@Controller('config-autogestion')
export class ConfigAutogestionController extends BaseController<
  ConfigAutogestion,
  CreateConfigAutogestionDto,
  UpdateConfigAutogestionDto
>(
  'CONFIG_AUTOGESTION',
  CreateConfigAutogestionDto,
  UpdateConfigAutogestionDto,
) {
  constructor(service: ConfigAutogestionService) {
    super(service);
  }
}
