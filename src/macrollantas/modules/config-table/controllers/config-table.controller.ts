import { Controller } from '@nestjs/common';
import { ConfigTable } from '../entities/config-table.entity';
import { CreateConfigTableDto } from '../dto/create-config-table.dto';
import { UpdateConfigTableDto } from '../dto/update-config-table.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ConfigTableService } from '../services/config-table.service';

@Controller('config-table')
export class ConfigTableController extends BaseController<
  ConfigTable,
  CreateConfigTableDto,
  UpdateConfigTableDto
>('CONFIG_TABLE', CreateConfigTableDto, UpdateConfigTableDto) {
  constructor(service: ConfigTableService) {
    super(service);
  }
}
