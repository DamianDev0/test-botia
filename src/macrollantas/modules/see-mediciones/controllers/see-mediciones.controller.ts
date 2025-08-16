import { Controller } from '@nestjs/common';
import { SeeMediciones } from '../entities/see-mediciones.entity';
import { CreateSeeMedicionesDto } from '../dto/create-see-mediciones.dto';
import { UpdateSeeMedicionesDto } from '../dto/update-see-mediciones.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { SeeMedicionesService } from '../services/see-mediciones.service';

@Controller('see-mediciones')
export class SeeMedicionesController extends BaseController<
  SeeMediciones,
  CreateSeeMedicionesDto,
  UpdateSeeMedicionesDto
>('see_mediciones', CreateSeeMedicionesDto, UpdateSeeMedicionesDto) {
  constructor(service: SeeMedicionesService) {
    super(service);
  }
}
