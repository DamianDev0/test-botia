import { Controller } from '@nestjs/common';
import { Encuesta } from '../entities/encuesta.entity';
import { CreateEncuestaDto } from '../dto/create-encuesta.dto';
import { UpdateEncuestaDto } from '../dto/update-encuesta.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { EncuestaService } from '../services/encuesta.service';

@Controller('encuesta')
export class EncuestaController extends BaseController<
  Encuesta,
  CreateEncuestaDto,
  UpdateEncuestaDto
>('ENCUESTA', CreateEncuestaDto, UpdateEncuestaDto) {
  constructor(service: EncuestaService) {
    super(service);
  }
}
