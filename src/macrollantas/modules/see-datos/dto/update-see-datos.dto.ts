import { PartialType } from '@nestjs/swagger';
import { CreateSeeDatosDto } from './create-see-datos.dto';

export class UpdateSeeDatosDto extends PartialType(CreateSeeDatosDto) {}
