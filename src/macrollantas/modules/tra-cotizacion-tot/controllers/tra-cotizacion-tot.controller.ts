import { Controller } from '@nestjs/common';
import { TraCotizacionTot } from '../entities/tra-cotizacion-tot.entity';
import { CreateTraCotizacionTotDto } from '../dto/create-tra-cotizacion-tot.dto';
import { UpdateTraCotizacionTotDto } from '../dto/update-tra-cotizacion-tot.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraCotizacionTotService } from '../services/tra-cotizacion-tot.service';

@Controller('tra-cotizacion-tot')
export class TraCotizacionTotController extends BaseController<
  TraCotizacionTot,
  CreateTraCotizacionTotDto,
  UpdateTraCotizacionTotDto
>('tra_cotizacion_tot', CreateTraCotizacionTotDto, UpdateTraCotizacionTotDto) {
  constructor(service: TraCotizacionTotService) {
    super(service);
  }
}
