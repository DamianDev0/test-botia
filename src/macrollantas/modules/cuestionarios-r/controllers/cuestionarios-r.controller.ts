import { Controller } from '@nestjs/common';
import { CuestionariosR } from '../entities/cuestionarios-r.entity';
import { CreateCuestionariosRDto } from '../dto/create-cuestionarios-r.dto';
import { UpdateCuestionariosRDto } from '../dto/update-cuestionarios-r.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { CuestionariosRService } from '../services/cuestionarios-r.service';

@Controller('cuestionarios-r')
export class CuestionariosRController extends BaseController<
  CuestionariosR,
  CreateCuestionariosRDto,
  UpdateCuestionariosRDto
>('CUESTIONARIOS_R', CreateCuestionariosRDto, UpdateCuestionariosRDto) {
  constructor(service: CuestionariosRService) {
    super(service);
  }
}
