import { Controller } from '@nestjs/common';
import { SeePeriodos } from '../entities/see-periodos.entity';
import { CreateSeePeriodosDto } from '../dto/create-see-periodos.dto';
import { UpdateSeePeriodosDto } from '../dto/update-see-periodos.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { SeePeriodosService } from '../services/see-periodos.service';

@Controller('see-periodos')
export class SeePeriodosController extends BaseController<
  SeePeriodos,
  CreateSeePeriodosDto,
  UpdateSeePeriodosDto
>('see_periodos', CreateSeePeriodosDto, UpdateSeePeriodosDto) {
  constructor(service: SeePeriodosService) {
    super(service);
  }
}
