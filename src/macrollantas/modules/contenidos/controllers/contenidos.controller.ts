import { Controller } from '@nestjs/common';
import { Contenidos } from '../entities/contenidos.entity';
import { CreateContenidosDto } from '../dto/create-contenidos.dto';
import { UpdateContenidosDto } from '../dto/update-contenidos.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ContenidosService } from '../services/contenidos.service';

@Controller('contenidos')
export class ContenidosController extends BaseController<
  Contenidos,
  CreateContenidosDto,
  UpdateContenidosDto
>('CONTENIDOS', CreateContenidosDto, UpdateContenidosDto) {
  constructor(service: ContenidosService) {
    super(service);
  }
}
