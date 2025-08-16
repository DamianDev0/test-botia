import { Controller } from '@nestjs/common';
import { ContenidosSub } from '../entities/contenidos-sub.entity';
import { CreateContenidosSubDto } from '../dto/create-contenidos-sub.dto';
import { UpdateContenidosSubDto } from '../dto/update-contenidos-sub.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ContenidosSubService } from '../services/contenidos-sub.service';

@Controller('contenidos-sub')
export class ContenidosSubController extends BaseController<
  ContenidosSub,
  CreateContenidosSubDto,
  UpdateContenidosSubDto
>('CONTENIDOS_SUB', CreateContenidosSubDto, UpdateContenidosSubDto) {
  constructor(service: ContenidosSubService) {
    super(service);
  }
}
