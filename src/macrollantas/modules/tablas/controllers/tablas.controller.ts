import { Controller } from '@nestjs/common';
import { Tablas } from '../entities/tablas.entity';
import { CreateTablasDto } from '../dto/create-tablas.dto';
import { UpdateTablasDto } from '../dto/update-tablas.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TablasService } from '../services/tablas.service';

@Controller('tablas')
export class TablasController extends BaseController<
  Tablas,
  CreateTablasDto,
  UpdateTablasDto
>('TABLAS', CreateTablasDto, UpdateTablasDto) {
  constructor(service: TablasService) {
    super(service);
  }
}
