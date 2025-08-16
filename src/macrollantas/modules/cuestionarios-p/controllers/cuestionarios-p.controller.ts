import { Controller } from '@nestjs/common';
import { CuestionariosP } from '../entities/cuestionarios-p.entity';
import { CreateCuestionariosPDto } from '../dto/create-cuestionarios-p.dto';
import { UpdateCuestionariosPDto } from '../dto/update-cuestionarios-p.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { CuestionariosPService } from '../services/cuestionarios-p.service';

@Controller('cuestionarios-p')
export class CuestionariosPController extends BaseController<
  CuestionariosP,
  CreateCuestionariosPDto,
  UpdateCuestionariosPDto
>('CUESTIONARIOS_P', CreateCuestionariosPDto, UpdateCuestionariosPDto) {
  constructor(service: CuestionariosPService) {
    super(service);
  }
}
