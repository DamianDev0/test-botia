import { Controller } from '@nestjs/common';
import { DetalleCeldas } from '../entities/detalle-celdas.entity';
import { CreateDetalleCeldasDto } from '../dto/create-detalle-celdas.dto';
import { UpdateDetalleCeldasDto } from '../dto/update-detalle-celdas.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { DetalleCeldasService } from '../services/detalle-celdas.service';

@Controller('detalle-celdas')
export class DetalleCeldasController extends BaseController<
  DetalleCeldas,
  CreateDetalleCeldasDto,
  UpdateDetalleCeldasDto
>('DETALLE_CELDAS', CreateDetalleCeldasDto, UpdateDetalleCeldasDto) {
  constructor(service: DetalleCeldasService) {
    super(service);
  }
}
