import { Controller } from '@nestjs/common';
import { MotivosAnulacion } from '../entities/motivos-anulacion.entity';
import { CreateMotivosAnulacionDto } from '../dto/create-motivos-anulacion.dto';
import { UpdateMotivosAnulacionDto } from '../dto/update-motivos-anulacion.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { MotivosAnulacionService } from '../services/motivos-anulacion.service';

@Controller('motivos-anulacion')
export class MotivosAnulacionController extends BaseController<
  MotivosAnulacion,
  CreateMotivosAnulacionDto,
  UpdateMotivosAnulacionDto
>('motivos_anulacion', CreateMotivosAnulacionDto, UpdateMotivosAnulacionDto) {
  constructor(service: MotivosAnulacionService) {
    super(service);
  }
}
