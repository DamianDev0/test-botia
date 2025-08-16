import { Controller } from '@nestjs/common';
import { Usuarios1 } from '../entities/usuarios1.entity';
import { CreateUsuarios1Dto } from '../dto/create-usuarios1.dto';
import { UpdateUsuarios1Dto } from '../dto/update-usuarios1.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { Usuarios1Service } from '../services/usuarios1.service';

@Controller('usuarios1')
export class Usuarios1Controller extends BaseController<
  Usuarios1,
  CreateUsuarios1Dto,
  UpdateUsuarios1Dto
>('usuarios1', CreateUsuarios1Dto, UpdateUsuarios1Dto) {
  constructor(service: Usuarios1Service) {
    super(service);
  }
}
