import { Controller } from '@nestjs/common';
import { SeeDatos } from '../entities/see-datos.entity';
import { CreateSeeDatosDto } from '../dto/create-see-datos.dto';
import { UpdateSeeDatosDto } from '../dto/update-see-datos.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { SeeDatosService } from '../services/see-datos.service';

@Controller('see-datos')
export class SeeDatosController extends BaseController<
  SeeDatos,
  CreateSeeDatosDto,
  UpdateSeeDatosDto
>('see_datos', CreateSeeDatosDto, UpdateSeeDatosDto) {
  constructor(service: SeeDatosService) {
    super(service);
  }
}
