import { Controller } from '@nestjs/common';
import { TraProcesosTiemposColores } from '../entities/tra-procesos-tiempos-colores.entity';
import { CreateTraProcesosTiemposColoresDto } from '../dto/create-tra-procesos-tiempos-colores.dto';
import { UpdateTraProcesosTiemposColoresDto } from '../dto/update-tra-procesos-tiempos-colores.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraProcesosTiemposColoresService } from '../services/tra-procesos-tiempos-colores.service';

@Controller('tra-procesos-tiempos-colores')
export class TraProcesosTiemposColoresController extends BaseController<
  TraProcesosTiemposColores,
  CreateTraProcesosTiemposColoresDto,
  UpdateTraProcesosTiemposColoresDto
>('tra_procesos_tiempos_colores', CreateTraProcesosTiemposColoresDto, UpdateTraProcesosTiemposColoresDto) {
  constructor(service: TraProcesosTiemposColoresService) {
    super(service);
  }
}
