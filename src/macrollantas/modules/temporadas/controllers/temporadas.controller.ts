import { Controller } from '@nestjs/common';
import { Temporadas } from '../entities/temporadas.entity';
import { CreateTemporadasDto } from '../dto/create-temporadas.dto';
import { UpdateTemporadasDto } from '../dto/update-temporadas.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TemporadasService } from '../services/temporadas.service';

@Controller('temporadas')
export class TemporadasController extends BaseController<
  Temporadas,
  CreateTemporadasDto,
  UpdateTemporadasDto
>('TEMPORADAS', CreateTemporadasDto, UpdateTemporadasDto) {
  constructor(service: TemporadasService) {
    super(service);
  }
}
