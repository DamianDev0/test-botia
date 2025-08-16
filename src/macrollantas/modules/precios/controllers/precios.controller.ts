import { Controller } from '@nestjs/common';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { Precios } from '../entities/precios.entity';
import { CreatePreciosDto } from '../dto/create-precios.dto';
import { UpdatePreciosDto } from '../dto/update-precios.dto';
import { PreciosService } from '../services/precios.service';

@Controller('precios')
export class PreciosController extends BaseController<
  Precios,
  CreatePreciosDto,
  UpdatePreciosDto
>('PRECIOS', CreatePreciosDto, UpdatePreciosDto) {
  constructor(service: PreciosService) {
    super(service);
  }
}
