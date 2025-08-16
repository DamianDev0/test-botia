import { Controller } from '@nestjs/common';
import { TraPlantillasDet } from '../entities/tra-plantillas-det.entity';
import { CreateTraPlantillasDetDto } from '../dto/create-tra-plantillas-det.dto';
import { UpdateTraPlantillasDetDto } from '../dto/update-tra-plantillas-det.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraPlantillasDetService } from '../services/tra-plantillas-det.service';

@Controller('tra-plantillas-det')
export class TraPlantillasDetController extends BaseController<
  TraPlantillasDet,
  CreateTraPlantillasDetDto,
  UpdateTraPlantillasDetDto
>('tra_plantillas_det', CreateTraPlantillasDetDto, UpdateTraPlantillasDetDto) {
  constructor(service: TraPlantillasDetService) {
    super(service);
  }
}
