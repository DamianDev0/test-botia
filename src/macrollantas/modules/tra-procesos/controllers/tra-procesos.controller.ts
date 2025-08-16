import { Controller } from '@nestjs/common';
import { TraProcesos } from '../entities/tra-procesos.entity';
import { CreateTraProcesosDto } from '../dto/create-tra-procesos.dto';
import { UpdateTraProcesosDto } from '../dto/update-tra-procesos.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraProcesosService } from '../services/tra-procesos.service';

@Controller('tra-procesos')
export class TraProcesosController extends BaseController<
  TraProcesos,
  CreateTraProcesosDto,
  UpdateTraProcesosDto
>('tra_procesos', CreateTraProcesosDto, UpdateTraProcesosDto) {
  constructor(service: TraProcesosService) {
    super(service);
  }
}
