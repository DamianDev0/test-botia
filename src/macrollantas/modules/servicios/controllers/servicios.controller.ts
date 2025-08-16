import { Controller } from '@nestjs/common';
import { Servicios } from '../entities/servicios.entity';
import { CreateServiciosDto } from '../dto/create-servicios.dto';
import { UpdateServiciosDto } from '../dto/update-servicios.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ServiciosService } from '../services/servicios.service';

@Controller('servicios')
export class ServiciosController extends BaseController<
  Servicios,
  CreateServiciosDto,
  UpdateServiciosDto
>('servicios', CreateServiciosDto, UpdateServiciosDto) {
  constructor(service: ServiciosService) {
    super(service);
  }
}
