import { Controller } from '@nestjs/common';
import { ContenidosDet } from '../entities/contenidos-det.entity';
import { CreateContenidosDetDto } from '../dto/create-contenidos-det.dto';
import { UpdateContenidosDetDto } from '../dto/update-contenidos-det.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ContenidosDetService } from '../services/contenidos-det.service';

@Controller('contenidos-det')
export class ContenidosDetController extends BaseController<
  ContenidosDet,
  CreateContenidosDetDto,
  UpdateContenidosDetDto
>('CONTENIDOS_DET', CreateContenidosDetDto, UpdateContenidosDetDto) {
  constructor(service: ContenidosDetService) {
    super(service);
  }
}
