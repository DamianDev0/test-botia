import { Controller } from '@nestjs/common';
import { TraSaldos } from '../entities/tra-saldos.entity';
import { CreateTraSaldosDto } from '../dto/create-tra-saldos.dto';
import { UpdateTraSaldosDto } from '../dto/update-tra-saldos.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraSaldosService } from '../services/tra-saldos.service';

@Controller('tra-saldos')
export class TraSaldosController extends BaseController<
  TraSaldos,
  CreateTraSaldosDto,
  UpdateTraSaldosDto
>('tra_saldos', CreateTraSaldosDto, UpdateTraSaldosDto) {
  constructor(service: TraSaldosService) {
    super(service);
  }
}
