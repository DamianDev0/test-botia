import { PartialType } from '@nestjs/swagger';
import { CreateMotivosDto } from './create-motivos.dto';

export class UpdateMotivosDto extends PartialType(CreateMotivosDto) {}
