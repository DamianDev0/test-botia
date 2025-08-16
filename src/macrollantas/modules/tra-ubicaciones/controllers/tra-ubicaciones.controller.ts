import { Controller } from '@nestjs/common';
import { TraUbicaciones } from '../entities/tra-ubicaciones.entity';
import { CreateTraUbicacionesDto } from '../dto/create-tra-ubicaciones.dto';
import { UpdateTraUbicacionesDto } from '../dto/update-tra-ubicaciones.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraUbicacionesService } from '../services/tra-ubicaciones.service';

@Controller('tra-ubicaciones')
export class TraUbicacionesController extends BaseController<
  TraUbicaciones,
  CreateTraUbicacionesDto,
  UpdateTraUbicacionesDto
>('tra_ubicaciones', CreateTraUbicacionesDto, UpdateTraUbicacionesDto) {
  constructor(service: TraUbicacionesService) {
    super(service);
  }
}
