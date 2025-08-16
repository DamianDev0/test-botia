import { PartialType } from '@nestjs/swagger';
import { CreateTraCategoriasDto } from './create-tra-categorias.dto';

export class UpdateTraCategoriasDto extends PartialType(CreateTraCategoriasDto) {}
