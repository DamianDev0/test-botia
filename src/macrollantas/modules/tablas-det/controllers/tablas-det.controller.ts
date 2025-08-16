import { Controller } from '@nestjs/common';
import { TablasDet } from '../entities/tablas-det.entity';
import { CreateTablasDetDto } from '../dto/create-tablas-det.dto';
import { UpdateTablasDetDto } from '../dto/update-tablas-det.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TablasDetService } from '../services/tablas-det.service';

@Controller('tablas-det')
export class TablasDetController extends BaseController<
  TablasDet,
  CreateTablasDetDto,
  UpdateTablasDetDto
>('TABLAS_DET', CreateTablasDetDto, UpdateTablasDetDto) {
  constructor(service: TablasDetService) {
    super(service);
  }
}
