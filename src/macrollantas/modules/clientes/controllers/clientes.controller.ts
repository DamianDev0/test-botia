import { Controller } from '@nestjs/common';
import { Clientes } from '../entities/clientes.entity';
import { CreateClientesDto } from '../dto/create-clientes.dto';
import { UpdateClientesDto } from '../dto/update-clientes.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ClientesService } from '../services/clientes.service';

@Controller('clientes')
export class ClientesController extends BaseController<
  Clientes,
  CreateClientesDto,
  UpdateClientesDto
>('clientes', CreateClientesDto, UpdateClientesDto) {
  constructor(service: ClientesService) {
    super(service);
  }
}
