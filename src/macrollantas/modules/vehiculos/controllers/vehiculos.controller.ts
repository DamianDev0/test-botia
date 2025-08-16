import { Controller } from '@nestjs/common';
import { Vehiculos } from '../entities/vehiculos.entity';
import { CreateVehiculosDto } from '../dto/create-vehiculos.dto';
import { UpdateVehiculosDto } from '../dto/update-vehiculos.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { VehiculosService } from '../services/vehiculos.service';

@Controller('vehiculos')
export class VehiculosController extends BaseController<
  Vehiculos,
  CreateVehiculosDto,
  UpdateVehiculosDto
>('vehiculos', CreateVehiculosDto, UpdateVehiculosDto) {
  constructor(service: VehiculosService) {
    super(service);
  }
}
