import { Controller } from '@nestjs/common';
import { Tecnicos } from '../entities/tecnicos.entity';
import { CreateTecnicosDto } from '../dto/create-tecnicos.dto';
import { UpdateTecnicosDto } from '../dto/update-tecnicos.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TecnicosService } from '../services/tecnicos.service';

@Controller('tecnicos')
export class TecnicosController extends BaseController<
  Tecnicos,
  CreateTecnicosDto,
  UpdateTecnicosDto
>('tecnicos', CreateTecnicosDto, UpdateTecnicosDto) {
  constructor(service: TecnicosService) {
    super(service);
  }
}
