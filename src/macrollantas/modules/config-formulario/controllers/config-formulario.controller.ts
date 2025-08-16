import { Controller } from '@nestjs/common';
import { ConfigFormulario } from '../entities/config-formulario.entity';
import { CreateConfigFormularioDto } from '../dto/create-config-formulario.dto';
import { UpdateConfigFormularioDto } from '../dto/update-config-formulario.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ConfigFormularioService } from '../services/config-formulario.service';

@Controller('config-formulario')
export class ConfigFormularioController extends BaseController<
  ConfigFormulario,
  CreateConfigFormularioDto,
  UpdateConfigFormularioDto
>('CONFIG_FORMULARIO', CreateConfigFormularioDto, UpdateConfigFormularioDto) {
  constructor(service: ConfigFormularioService) {
    super(service);
  }
}
