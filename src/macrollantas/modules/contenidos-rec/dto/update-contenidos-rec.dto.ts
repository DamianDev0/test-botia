import { PartialType } from '@nestjs/swagger';
import { CreateContenidosRecDto } from './create-contenidos-rec.dto';

export class UpdateContenidosRecDto extends PartialType(CreateContenidosRecDto) {}
