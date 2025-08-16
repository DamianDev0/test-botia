import { Controller } from '@nestjs/common';
import { ContenidosRec } from '../entities/contenidos-rec.entity';
import { CreateContenidosRecDto } from '../dto/create-contenidos-rec.dto';
import { UpdateContenidosRecDto } from '../dto/update-contenidos-rec.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ContenidosRecService } from '../services/contenidos-rec.service';

@Controller('contenidos-rec')
export class ContenidosRecController extends BaseController<
  ContenidosRec,
  CreateContenidosRecDto,
  UpdateContenidosRecDto
>('CONTENIDOS_REC', CreateContenidosRecDto, UpdateContenidosRecDto) {
  constructor(service: ContenidosRecService) {
    super(service);
  }
}
