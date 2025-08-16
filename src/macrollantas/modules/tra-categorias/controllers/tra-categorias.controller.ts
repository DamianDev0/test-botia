import { Controller } from '@nestjs/common';
import { TraCategorias } from '../entities/tra-categorias.entity';
import { CreateTraCategoriasDto } from '../dto/create-tra-categorias.dto';
import { UpdateTraCategoriasDto } from '../dto/update-tra-categorias.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraCategoriasService } from '../services/tra-categorias.service';

@Controller('tra-categorias')
export class TraCategoriasController extends BaseController<
  TraCategorias,
  CreateTraCategoriasDto,
  UpdateTraCategoriasDto
>('tra_categorias', CreateTraCategoriasDto, UpdateTraCategoriasDto) {
  constructor(service: TraCategoriasService) {
    super(service);
  }
}
