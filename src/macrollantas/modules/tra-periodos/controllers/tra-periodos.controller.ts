import { Controller } from '@nestjs/common';
import { TraPeriodos } from '../entities/tra-periodos.entity';
import { CreateTraPeriodosDto } from '../dto/create-tra-periodos.dto';
import { UpdateTraPeriodosDto } from '../dto/update-tra-periodos.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraPeriodosService } from '../services/tra-periodos.service';

@Controller('tra-periodos')
export class TraPeriodosController extends BaseController<
  TraPeriodos,
  CreateTraPeriodosDto,
  UpdateTraPeriodosDto
>('tra_periodos', CreateTraPeriodosDto, UpdateTraPeriodosDto) {
  constructor(service: TraPeriodosService) {
    super(service);
  }
}
