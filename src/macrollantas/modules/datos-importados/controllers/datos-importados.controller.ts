import { Controller } from '@nestjs/common';
import { DatosImportados } from '../entities/datos-importados.entity';
import { CreateDatosImportadosDto } from '../dto/create-datos-importados.dto';
import { UpdateDatosImportadosDto } from '../dto/update-datos-importados.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { DatosImportadosService } from '../services/datos-importados.service';

@Controller('datos-importados')
export class DatosImportadosController extends BaseController<
  DatosImportados,
  CreateDatosImportadosDto,
  UpdateDatosImportadosDto
>('datos_importados', CreateDatosImportadosDto, UpdateDatosImportadosDto) {
  constructor(service: DatosImportadosService) {
    super(service);
  }
}
