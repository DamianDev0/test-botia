import { PartialType } from '@nestjs/swagger';
import { CreateContenidosProDto } from './create-contenidos-pro.dto';

export class UpdateContenidosProDto extends PartialType(CreateContenidosProDto) {}
