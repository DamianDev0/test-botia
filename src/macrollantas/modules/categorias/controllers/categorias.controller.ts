import { Controller } from '@nestjs/common';
import { Categorias } from '../entities/categorias.entity';
import { CreateCategoriasDto } from '../dto/create-categorias.dto';
import { UpdateCategoriasDto } from '../dto/update-categorias.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { CategoriasService } from '../services/categorias.service';

@Controller('categorias')
export class CategoriasController extends BaseController<
  Categorias,
  CreateCategoriasDto,
  UpdateCategoriasDto
>('categorias', CreateCategoriasDto, UpdateCategoriasDto) {
  constructor(service: CategoriasService) {
    super(service);
  }
}
