import { Controller } from '@nestjs/common';
import { ContenidosCap } from '../entities/contenidos-cap.entity';
import { CreateContenidosCapDto } from '../dto/create-contenidos-cap.dto';
import { UpdateContenidosCapDto } from '../dto/update-contenidos-cap.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ContenidosCapService } from '../services/contenidos-cap.service';

@Controller('contenidos-cap')
export class ContenidosCapController extends BaseController<
  ContenidosCap,
  CreateContenidosCapDto,
  UpdateContenidosCapDto
>('CONTENIDOS_CAP', CreateContenidosCapDto, UpdateContenidosCapDto) {
  constructor(service: ContenidosCapService) {
    super(service);
  }
}
