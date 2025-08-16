import { Controller } from '@nestjs/common';
import { Subcategorias } from '../entities/subcategorias.entity';
import { CreateSubcategoriasDto } from '../dto/create-subcategorias.dto';
import { UpdateSubcategoriasDto } from '../dto/update-subcategorias.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { SubcategoriasService } from '../services/subcategorias.service';

@Controller('subcategorias')
export class SubcategoriasController extends BaseController<
  Subcategorias,
  CreateSubcategoriasDto,
  UpdateSubcategoriasDto
>('subcategorias', CreateSubcategoriasDto, UpdateSubcategoriasDto) {
  constructor(service: SubcategoriasService) {
    super(service);
  }
}
