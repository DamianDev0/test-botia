import { PartialType } from '@nestjs/swagger';
import { CreateContenidosSubDto } from './create-contenidos-sub.dto';

export class UpdateContenidosSubDto extends PartialType(CreateContenidosSubDto) {}
