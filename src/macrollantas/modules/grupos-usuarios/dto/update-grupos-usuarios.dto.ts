import { PartialType } from '@nestjs/swagger';
import { CreateGruposUsuariosDto } from './create-grupos-usuarios.dto';

export class UpdateGruposUsuariosDto extends PartialType(CreateGruposUsuariosDto) {}
