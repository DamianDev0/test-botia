import { Controller } from '@nestjs/common';
import { Empresas } from '../entities/empresas.entity';
import { CreateEmpresasDto } from '../dto/create-empresas.dto';
import { UpdateEmpresasDto } from '../dto/update-empresas.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { EmpresasService } from '../services/empresas.service';

@Controller('empresas')
export class EmpresasController extends BaseController<
  Empresas,
  CreateEmpresasDto,
  UpdateEmpresasDto
>('empresas', CreateEmpresasDto, UpdateEmpresasDto) {
  constructor(service: EmpresasService) {
    super(service);
  }
}
