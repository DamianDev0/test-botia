import { PartialType } from '@nestjs/swagger';
import { CreateContenidosDetDto } from './create-contenidos-det.dto';

export class UpdateContenidosDetDto extends PartialType(CreateContenidosDetDto) {}
