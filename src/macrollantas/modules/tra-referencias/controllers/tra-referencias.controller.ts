import { Controller } from '@nestjs/common';
import { TraReferencias } from '../entities/tra-referencias.entity';
import { CreateTraReferenciasDto } from '../dto/create-tra-referencias.dto';
import { UpdateTraReferenciasDto } from '../dto/update-tra-referencias.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraReferenciasService } from '../services/tra-referencias.service';

@Controller('tra-referencias')
export class TraReferenciasController extends BaseController<
  TraReferencias,
  CreateTraReferenciasDto,
  UpdateTraReferenciasDto
>('tra_referencias', CreateTraReferenciasDto, UpdateTraReferenciasDto) {
  constructor(service: TraReferenciasService) {
    super(service);
  }
}
