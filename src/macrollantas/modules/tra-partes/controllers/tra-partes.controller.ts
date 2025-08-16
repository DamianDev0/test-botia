import { Controller } from '@nestjs/common';
import { TraPartes } from '../entities/tra-partes.entity';
import { CreateTraPartesDto } from '../dto/create-tra-partes.dto';
import { UpdateTraPartesDto } from '../dto/update-tra-partes.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraPartesService } from '../services/tra-partes.service';

@Controller('tra-partes')
export class TraPartesController extends BaseController<
  TraPartes,
  CreateTraPartesDto,
  UpdateTraPartesDto
>('tra_partes', CreateTraPartesDto, UpdateTraPartesDto) {
  constructor(service: TraPartesService) {
    super(service);
  }
}
