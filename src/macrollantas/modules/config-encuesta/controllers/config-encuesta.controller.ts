import { Controller } from '@nestjs/common';
import { ConfigEncuesta } from '../entities/config-encuesta.entity';
import { CreateConfigEncuestaDto } from '../dto/create-config-encuesta.dto';
import { UpdateConfigEncuestaDto } from '../dto/update-config-encuesta.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ConfigEncuestaService } from '../services/config-encuesta.service';

@Controller('config-encuesta')
export class ConfigEncuestaController extends BaseController<
  ConfigEncuesta,
  CreateConfigEncuestaDto,
  UpdateConfigEncuestaDto
>('CONFIG_ENCUESTA', CreateConfigEncuestaDto, UpdateConfigEncuestaDto) {
  constructor(service: ConfigEncuestaService) {
    super(service);
  }
}
