import { Controller } from '@nestjs/common';
import { Preguntas } from '../entities/preguntas.entity';
import { CreatePreguntasDto } from '../dto/create-preguntas.dto';
import { UpdatePreguntasDto } from '../dto/update-preguntas.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { PreguntasService } from '../services/preguntas.service';

@Controller('preguntas')
export class PreguntasController extends BaseController<
  Preguntas,
  CreatePreguntasDto,
  UpdatePreguntasDto
>('PREGUNTAS', CreatePreguntasDto, UpdatePreguntasDto) {
  constructor(service: PreguntasService) {
    super(service);
  }
}
