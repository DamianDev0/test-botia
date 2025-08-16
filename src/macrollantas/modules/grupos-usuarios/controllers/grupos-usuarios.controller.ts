import { Controller } from '@nestjs/common';
import { GruposUsuarios } from '../entities/grupos-usuarios.entity';
import { CreateGruposUsuariosDto } from '../dto/create-grupos-usuarios.dto';
import { UpdateGruposUsuariosDto } from '../dto/update-grupos-usuarios.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { GruposUsuariosService } from '../services/grupos-usuarios.service';

@Controller('grupos-usuarios')
export class GruposUsuariosController extends BaseController<
  GruposUsuarios,
  CreateGruposUsuariosDto,
  UpdateGruposUsuariosDto
>('grupos_usuarios', CreateGruposUsuariosDto, UpdateGruposUsuariosDto) {
  constructor(service: GruposUsuariosService) {
    super(service);
  }
}
