import { Controller } from '@nestjs/common';
import { ContenidosTsk } from '../entities/contenidos-tsk.entity';
import { CreateContenidosTskDto } from '../dto/create-contenidos-tsk.dto';
import { UpdateContenidosTskDto } from '../dto/update-contenidos-tsk.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ContenidosTskService } from '../services/contenidos-tsk.service';

@Controller('contenidos-tsk')
export class ContenidosTskController extends BaseController<
  ContenidosTsk,
  CreateContenidosTskDto,
  UpdateContenidosTskDto
>('CONTENIDOS_TSK', CreateContenidosTskDto, UpdateContenidosTskDto) {
  constructor(service: ContenidosTskService) {
    super(service);
  }
}
