import { Controller } from '@nestjs/common';
import { TraTiposVeh } from '../entities/tra-tipos-veh.entity';
import { CreateTraTiposVehDto } from '../dto/create-tra-tipos-veh.dto';
import { UpdateTraTiposVehDto } from '../dto/update-tra-tipos-veh.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraTiposVehService } from '../services/tra-tipos-veh.service';

@Controller('tra-tipos-veh')
export class TraTiposVehController extends BaseController<
  TraTiposVeh,
  CreateTraTiposVehDto,
  UpdateTraTiposVehDto
>('tra_tipos_veh', CreateTraTiposVehDto, UpdateTraTiposVehDto) {
  constructor(service: TraTiposVehService) {
    super(service);
  }
}
