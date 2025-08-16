import { Controller } from '@nestjs/common';
import { TraModelos } from '../entities/tra-modelos.entity';
import { CreateTraModelosDto } from '../dto/create-tra-modelos.dto';
import { UpdateTraModelosDto } from '../dto/update-tra-modelos.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraModelosService } from '../services/tra-modelos.service';

@Controller('tra-modelos')
export class TraModelosController extends BaseController<
  TraModelos,
  CreateTraModelosDto,
  UpdateTraModelosDto
>('tra_modelos', CreateTraModelosDto, UpdateTraModelosDto) {
  constructor(service: TraModelosService) {
    super(service);
  }
}
