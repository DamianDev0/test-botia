import { Controller } from '@nestjs/common';
import { Vencimientos } from '../entities/vencimientos.entity';
import { CreateVencimientosDto } from '../dto/create-vencimientos.dto';
import { UpdateVencimientosDto } from '../dto/update-vencimientos.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { VencimientosService } from '../services/vencimientos.service';

@Controller('vencimientos')
export class VencimientosController extends BaseController<
  Vencimientos,
  CreateVencimientosDto,
  UpdateVencimientosDto
>('VENCIMIENTOS', CreateVencimientosDto, UpdateVencimientosDto) {
  constructor(service: VencimientosService) {
    super(service);
  }
}
