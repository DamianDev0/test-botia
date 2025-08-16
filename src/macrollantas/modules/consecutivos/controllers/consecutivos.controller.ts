import { Controller } from '@nestjs/common';
import { Consecutivos } from '../entities/consecutivos.entity';
import { CreateConsecutivosDto } from '../dto/create-consecutivos.dto';
import { UpdateConsecutivosDto } from '../dto/update-consecutivos.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ConsecutivosService } from '../services/consecutivos.service';

@Controller('consecutivos')
export class ConsecutivosController extends BaseController<
  Consecutivos,
  CreateConsecutivosDto,
  UpdateConsecutivosDto
>('consecutivos', CreateConsecutivosDto, UpdateConsecutivosDto) {
  constructor(service: ConsecutivosService) {
    super(service);
  }
}
