import { Controller } from '@nestjs/common';
import { TraCotizacion } from '../entities/tra-cotizacion.entity';
import { CreateTraCotizacionDto } from '../dto/create-tra-cotizacion.dto';
import { UpdateTraCotizacionDto } from '../dto/update-tra-cotizacion.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraCotizacionService } from '../services/tra-cotizacion.service';

@Controller('tra-cotizacion')
export class TraCotizacionController extends BaseController<
  TraCotizacion,
  CreateTraCotizacionDto,
  UpdateTraCotizacionDto
>('tra_cotizacion', CreateTraCotizacionDto, UpdateTraCotizacionDto) {
  constructor(service: TraCotizacionService) {
    super(service);
  }
}
