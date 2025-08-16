import { Controller } from '@nestjs/common';
import { SeeCostoKwh } from '../entities/see-costo-kwh.entity';
import { CreateSeeCostoKwhDto } from '../dto/create-see-costo-kwh.dto';
import { UpdateSeeCostoKwhDto } from '../dto/update-see-costo-kwh.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { SeeCostoKwhService } from '../services/see-costo-kwh.service';

@Controller('see-costo-kwh')
export class SeeCostoKwhController extends BaseController<
  SeeCostoKwh,
  CreateSeeCostoKwhDto,
  UpdateSeeCostoKwhDto
>('see_costo_kwh', CreateSeeCostoKwhDto, UpdateSeeCostoKwhDto) {
  constructor(service: SeeCostoKwhService) {
    super(service);
  }
}
