import { Controller } from '@nestjs/common';
import { TraMovtos } from '../entities/tra-movtos.entity';
import { CreateTraMovtosDto } from '../dto/create-tra-movtos.dto';
import { UpdateTraMovtosDto } from '../dto/update-tra-movtos.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraMovtosService } from '../services/tra-movtos.service';

@Controller('tra-movtos')
export class TraMovtosController extends BaseController<
  TraMovtos,
  CreateTraMovtosDto,
  UpdateTraMovtosDto
>('tra_movtos', CreateTraMovtosDto, UpdateTraMovtosDto) {
  constructor(service: TraMovtosService) {
    super(service);
  }
}
