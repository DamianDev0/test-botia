import { PartialType } from '@nestjs/swagger';
import { CreateSubcategoriasDto } from './create-subcategorias.dto';

export class UpdateSubcategoriasDto extends PartialType(CreateSubcategoriasDto) {}
