import { Controller } from '@nestjs/common';
import { Usuarios } from '../entities/usuarios.entity';
import { CreateUsuariosDto } from '../dto/create-usuarios.dto';
import { UpdateUsuariosDto } from '../dto/update-usuarios.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { UsuariosService } from '../services/usuarios.service';

@Controller('usuarios')
export class UsuariosController extends BaseController<
  Usuarios,
  CreateUsuariosDto,
  UpdateUsuariosDto
>('usuarios', CreateUsuariosDto, UpdateUsuariosDto) {
  constructor(service: UsuariosService) {
    super(service);
  }
}
