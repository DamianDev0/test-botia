import { PartialType } from '@nestjs/swagger';
import { CreateConsecutivosDto } from './create-consecutivos.dto';

export class UpdateConsecutivosDto extends PartialType(CreateConsecutivosDto) {}
