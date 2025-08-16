import { PartialType } from '@nestjs/swagger';
import { CreateContenidosDto } from './create-contenidos.dto';

export class UpdateContenidosDto extends PartialType(CreateContenidosDto) {}
