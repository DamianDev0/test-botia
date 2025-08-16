import { Controller } from '@nestjs/common';
import { TraMovtosTot } from '../entities/tra-movtos-tot.entity';
import { CreateTraMovtosTotDto } from '../dto/create-tra-movtos-tot.dto';
import { UpdateTraMovtosTotDto } from '../dto/update-tra-movtos-tot.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraMovtosTotService } from '../services/tra-movtos-tot.service';

@Controller('tra-movtos-tot')
export class TraMovtosTotController extends BaseController<
  TraMovtosTot,
  CreateTraMovtosTotDto,
  UpdateTraMovtosTotDto
>('tra_movtos_tot', CreateTraMovtosTotDto, UpdateTraMovtosTotDto) {
  constructor(service: TraMovtosTotService) {
    super(service);
  }
}
