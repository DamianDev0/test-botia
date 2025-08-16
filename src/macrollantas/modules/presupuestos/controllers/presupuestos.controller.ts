import { Controller } from '@nestjs/common';
import { Presupuestos } from '../entities/presupuestos.entity';
import { CreatePresupuestosDto } from '../dto/create-presupuestos.dto';
import { UpdatePresupuestosDto } from '../dto/update-presupuestos.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { PresupuestosService } from '../services/presupuestos.service';

@Controller('presupuestos')
export class PresupuestosController extends BaseController<
  Presupuestos,
  CreatePresupuestosDto,
  UpdatePresupuestosDto
>('PRESUPUESTOS', CreatePresupuestosDto, UpdatePresupuestosDto) {
  constructor(service: PresupuestosService) {
    super(service);
  }
}
