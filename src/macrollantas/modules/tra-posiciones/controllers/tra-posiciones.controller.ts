import { Controller } from '@nestjs/common';
import { TraPosiciones } from '../entities/tra-posiciones.entity';
import { CreateTraPosicionesDto } from '../dto/create-tra-posiciones.dto';
import { UpdateTraPosicionesDto } from '../dto/update-tra-posiciones.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraPosicionesService } from '../services/tra-posiciones.service';

@Controller('tra-posiciones')
export class TraPosicionesController extends BaseController<
  TraPosiciones,
  CreateTraPosicionesDto,
  UpdateTraPosicionesDto
>('tra_posiciones', CreateTraPosicionesDto, UpdateTraPosicionesDto) {
  constructor(service: TraPosicionesService) {
    super(service);
  }
}
