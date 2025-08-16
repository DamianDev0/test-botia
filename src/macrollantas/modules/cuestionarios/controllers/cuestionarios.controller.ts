import { Controller } from '@nestjs/common';
import { Cuestionarios } from '../entities/cuestionarios.entity';
import { CreateCuestionariosDto } from '../dto/create-cuestionarios.dto';
import { UpdateCuestionariosDto } from '../dto/update-cuestionarios.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { CuestionariosService } from '../services/cuestionarios.service';

@Controller('cuestionarios')
export class CuestionariosController extends BaseController<
  Cuestionarios,
  CreateCuestionariosDto,
  UpdateCuestionariosDto
>('CUESTIONARIOS', CreateCuestionariosDto, UpdateCuestionariosDto) {
  constructor(service: CuestionariosService) {
    super(service);
  }
}
