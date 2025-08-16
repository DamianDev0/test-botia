import { PartialType } from '@nestjs/swagger';
import { CreateContenidosUsrDto } from './create-contenidos-usr.dto';

export class UpdateContenidosUsrDto extends PartialType(CreateContenidosUsrDto) {}
