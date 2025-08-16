import { Controller } from '@nestjs/common';
import { ContenidosUsr } from '../entities/contenidos-usr.entity';
import { CreateContenidosUsrDto } from '../dto/create-contenidos-usr.dto';
import { UpdateContenidosUsrDto } from '../dto/update-contenidos-usr.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ContenidosUsrService } from '../services/contenidos-usr.service';

@Controller('contenidos-usr')
export class ContenidosUsrController extends BaseController<
  ContenidosUsr,
  CreateContenidosUsrDto,
  UpdateContenidosUsrDto
>('CONTENIDOS_USR', CreateContenidosUsrDto, UpdateContenidosUsrDto) {
  constructor(service: ContenidosUsrService) {
    super(service);
  }
}
