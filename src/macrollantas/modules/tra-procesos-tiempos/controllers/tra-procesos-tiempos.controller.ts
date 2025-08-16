import { Controller } from '@nestjs/common';
import { TraProcesosTiempos } from '../entities/tra-procesos-tiempos.entity';
import { CreateTraProcesosTiemposDto } from '../dto/create-tra-procesos-tiempos.dto';
import { UpdateTraProcesosTiemposDto } from '../dto/update-tra-procesos-tiempos.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraProcesosTiemposService } from '../services/tra-procesos-tiempos.service';

@Controller('tra-procesos-tiempos')
export class TraProcesosTiemposController extends BaseController<
  TraProcesosTiempos,
  CreateTraProcesosTiemposDto,
  UpdateTraProcesosTiemposDto
>('tra_procesos_tiempos', CreateTraProcesosTiemposDto, UpdateTraProcesosTiemposDto) {
  constructor(service: TraProcesosTiemposService) {
    super(service);
  }
}
