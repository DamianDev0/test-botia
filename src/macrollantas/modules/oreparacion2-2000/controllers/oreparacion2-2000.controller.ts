import { Controller } from '@nestjs/common';
import { Oreparacion22000 } from '../entities/oreparacion2-2000.entity';
import { CreateOreparacion22000Dto } from '../dto/create-oreparacion2-2000.dto';
import { UpdateOreparacion22000Dto } from '../dto/update-oreparacion2-2000.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { Oreparacion22000Service } from '../services/oreparacion2-2000.service';

@Controller('oreparacion2-2000')
export class Oreparacion22000Controller extends BaseController<
  Oreparacion22000,
  CreateOreparacion22000Dto,
  UpdateOreparacion22000Dto
>('OREPARACION2_2000', CreateOreparacion22000Dto, UpdateOreparacion22000Dto) {
  constructor(service: Oreparacion22000Service) {
    super(service);
  }
}
