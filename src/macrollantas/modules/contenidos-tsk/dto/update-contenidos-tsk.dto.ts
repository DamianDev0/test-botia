import { PartialType } from '@nestjs/swagger';
import { CreateContenidosTskDto } from './create-contenidos-tsk.dto';

export class UpdateContenidosTskDto extends PartialType(CreateContenidosTskDto) {}
