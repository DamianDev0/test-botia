import { Controller } from '@nestjs/common';
import { Celdas } from '../entities/celdas.entity';
import { CreateCeldasDto } from '../dto/create-celdas.dto';
import { UpdateCeldasDto } from '../dto/update-celdas.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { CeldasService } from '../services/celdas.service';

@Controller('celdas')
export class CeldasController extends BaseController<
  Celdas,
  CreateCeldasDto,
  UpdateCeldasDto
>('celdas', CreateCeldasDto, UpdateCeldasDto) {
  constructor(service: CeldasService) {
    super(service);
  }
}
