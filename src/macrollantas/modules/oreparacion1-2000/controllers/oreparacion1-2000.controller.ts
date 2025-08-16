import { Controller } from '@nestjs/common';
import { Oreparacion12000 } from '../entities/oreparacion1-2000.entity';
import { CreateOreparacion12000Dto } from '../dto/create-oreparacion1-2000.dto';
import { UpdateOreparacion12000Dto } from '../dto/update-oreparacion1-2000.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { Oreparacion12000Service } from '../services/oreparacion1-2000.service';

@Controller('oreparacion1-2000')
export class Oreparacion12000Controller extends BaseController<
  Oreparacion12000,
  CreateOreparacion12000Dto,
  UpdateOreparacion12000Dto
>('OREPARACION1_2000', CreateOreparacion12000Dto, UpdateOreparacion12000Dto) {
  constructor(service: Oreparacion12000Service) {
    super(service);
  }
}
