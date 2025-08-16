import { PartialType } from '@nestjs/swagger';
import { CreateContenidosCapDto } from './create-contenidos-cap.dto';

export class UpdateContenidosCapDto extends PartialType(CreateContenidosCapDto) {}
