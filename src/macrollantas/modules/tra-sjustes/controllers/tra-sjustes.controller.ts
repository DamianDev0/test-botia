import { Controller } from '@nestjs/common';
import { TraSjustes } from '../entities/tra-sjustes.entity';
import { CreateTraSjustesDto } from '../dto/create-tra-sjustes.dto';
import { UpdateTraSjustesDto } from '../dto/update-tra-sjustes.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraSjustesService } from '../services/tra-sjustes.service';

@Controller('tra-sjustes')
export class TraSjustesController extends BaseController<
  TraSjustes,
  CreateTraSjustesDto,
  UpdateTraSjustesDto
>('tra_sjustes', CreateTraSjustesDto, UpdateTraSjustesDto) {
  constructor(service: TraSjustesService) {
    super(service);
  }
}
