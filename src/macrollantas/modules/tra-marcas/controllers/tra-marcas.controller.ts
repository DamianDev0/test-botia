import { Controller } from '@nestjs/common';
import { TraMarcas } from '../entities/tra-marcas.entity';
import { CreateTraMarcasDto } from '../dto/create-tra-marcas.dto';
import { UpdateTraMarcasDto } from '../dto/update-tra-marcas.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraMarcasService } from '../services/tra-marcas.service';

@Controller('tra-marcas')
export class TraMarcasController extends BaseController<
  TraMarcas,
  CreateTraMarcasDto,
  UpdateTraMarcasDto
>('tra_marcas', CreateTraMarcasDto, UpdateTraMarcasDto) {
  constructor(service: TraMarcasService) {
    super(service);
  }
}
