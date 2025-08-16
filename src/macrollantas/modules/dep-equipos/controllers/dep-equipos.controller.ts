import { Controller } from '@nestjs/common';
import { DepEquipos } from '../entities/dep-equipos.entity';
import { CreateDepEquiposDto } from '../dto/create-dep-equipos.dto';
import { UpdateDepEquiposDto } from '../dto/update-dep-equipos.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { DepEquiposService } from '../services/dep-equipos.service';

@Controller('dep-equipos')
export class DepEquiposController extends BaseController<
  DepEquipos,
  CreateDepEquiposDto,
  UpdateDepEquiposDto
>('DEP_EQUIPOS', CreateDepEquiposDto, UpdateDepEquiposDto) {
  constructor(service: DepEquiposService) {
    super(service);
  }
}
