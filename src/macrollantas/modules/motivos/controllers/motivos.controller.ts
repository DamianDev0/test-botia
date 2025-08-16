import { Controller } from '@nestjs/common';
import { Motivos } from '../entities/motivos.entity';
import { CreateMotivosDto } from '../dto/create-motivos.dto';
import { UpdateMotivosDto } from '../dto/update-motivos.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { MotivosService } from '../services/motivos.service';

@Controller('motivos')
export class MotivosController extends BaseController<
  Motivos,
  CreateMotivosDto,
  UpdateMotivosDto
>('motivos', CreateMotivosDto, UpdateMotivosDto) {
  constructor(service: MotivosService) {
    super(service);
  }
}
