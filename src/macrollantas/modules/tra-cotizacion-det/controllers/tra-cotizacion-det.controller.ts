import { Controller } from '@nestjs/common';
import { TraCotizacionDet } from '../entities/tra-cotizacion-det.entity';
import { CreateTraCotizacionDetDto } from '../dto/create-tra-cotizacion-det.dto';
import { UpdateTraCotizacionDetDto } from '../dto/update-tra-cotizacion-det.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraCotizacionDetService } from '../services/tra-cotizacion-det.service';

@Controller('tra-cotizacion-det')
export class TraCotizacionDetController extends BaseController<
  TraCotizacionDet,
  CreateTraCotizacionDetDto,
  UpdateTraCotizacionDetDto
>('tra_cotizacion_det', CreateTraCotizacionDetDto, UpdateTraCotizacionDetDto) {
  constructor(service: TraCotizacionDetService) {
    super(service);
  }
}
