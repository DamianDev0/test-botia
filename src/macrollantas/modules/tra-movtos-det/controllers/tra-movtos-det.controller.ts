import { Controller } from '@nestjs/common';
import { TraMovtosDet } from '../entities/tra-movtos-det.entity';
import { CreateTraMovtosDetDto } from '../dto/create-tra-movtos-det.dto';
import { UpdateTraMovtosDetDto } from '../dto/update-tra-movtos-det.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraMovtosDetService } from '../services/tra-movtos-det.service';

@Controller('tra-movtos-det')
export class TraMovtosDetController extends BaseController<
  TraMovtosDet,
  CreateTraMovtosDetDto,
  UpdateTraMovtosDetDto
>('tra_movtos_det', CreateTraMovtosDetDto, UpdateTraMovtosDetDto) {
  constructor(service: TraMovtosDetService) {
    super(service);
  }
}
