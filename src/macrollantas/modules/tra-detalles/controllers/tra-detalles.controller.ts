import { Controller } from '@nestjs/common';
import { TraDetalles } from '../entities/tra-detalles.entity';
import { CreateTraDetallesDto } from '../dto/create-tra-detalles.dto';
import { UpdateTraDetallesDto } from '../dto/update-tra-detalles.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraDetallesService } from '../services/tra-detalles.service';

@Controller('tra-detalles')
export class TraDetallesController extends BaseController<
  TraDetalles,
  CreateTraDetallesDto,
  UpdateTraDetallesDto
>('tra_detalles', CreateTraDetallesDto, UpdateTraDetallesDto) {
  constructor(service: TraDetallesService) {
    super(service);
  }
}
