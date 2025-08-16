import { PartialType } from '@nestjs/swagger';
import { CreateSusuariosDto } from './create-susuarios.dto';

export class UpdateSusuariosDto extends PartialType(CreateSusuariosDto) {}
