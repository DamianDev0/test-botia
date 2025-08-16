import { Controller } from '@nestjs/common';
import { ContenidosPro } from '../entities/contenidos-pro.entity';
import { CreateContenidosProDto } from '../dto/create-contenidos-pro.dto';
import { UpdateContenidosProDto } from '../dto/update-contenidos-pro.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ContenidosProService } from '../services/contenidos-pro.service';

@Controller('contenidos-pro')
export class ContenidosProController extends BaseController<
  ContenidosPro,
  CreateContenidosProDto,
  UpdateContenidosProDto
>('CONTENIDOS_PRO', CreateContenidosProDto, UpdateContenidosProDto) {
  constructor(service: ContenidosProService) {
    super(service);
  }
}
