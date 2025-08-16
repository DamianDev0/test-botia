import { Controller } from '@nestjs/common';
import { TraPlantillas } from '../entities/tra-plantillas.entity';
import { CreateTraPlantillasDto } from '../dto/create-tra-plantillas.dto';
import { UpdateTraPlantillasDto } from '../dto/update-tra-plantillas.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraPlantillasService } from '../services/tra-plantillas.service';

@Controller('tra-plantillas')
export class TraPlantillasController extends BaseController<
  TraPlantillas,
  CreateTraPlantillasDto,
  UpdateTraPlantillasDto
>('tra_plantillas', CreateTraPlantillasDto, UpdateTraPlantillasDto) {
  constructor(service: TraPlantillasService) {
    super(service);
  }
}
