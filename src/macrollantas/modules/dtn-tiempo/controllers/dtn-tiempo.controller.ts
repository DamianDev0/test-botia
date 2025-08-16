import { Controller } from '@nestjs/common';
import { DtnTiempo } from '../entities/dtn-tiempo.entity';
import { CreateDtnTiempoDto } from '../dto/create-dtn-tiempo.dto';
import { UpdateDtnTiempoDto } from '../dto/update-dtn-tiempo.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { DtnTiempoService } from '../services/dtn-tiempo.service';

@Controller('dtn-tiempo')
export class DtnTiempoController extends BaseController<
  DtnTiempo,
  CreateDtnTiempoDto,
  UpdateDtnTiempoDto
>('DTN_TIEMPO', CreateDtnTiempoDto, UpdateDtnTiempoDto) {
  constructor(service: DtnTiempoService) {
    super(service);
  }
}
