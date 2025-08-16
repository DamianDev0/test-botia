import { Controller } from '@nestjs/common';
import { ConfigDocumento } from '../entities/config-documento.entity';
import { CreateConfigDocumentoDto } from '../dto/create-config-documento.dto';
import { UpdateConfigDocumentoDto } from '../dto/update-config-documento.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ConfigDocumentoService } from '../services/config-documento.service';

@Controller('config-documento')
export class ConfigDocumentoController extends BaseController<
  ConfigDocumento,
  CreateConfigDocumentoDto,
  UpdateConfigDocumentoDto
>('CONFIG_DOCUMENTO', CreateConfigDocumentoDto, UpdateConfigDocumentoDto) {
  constructor(service: ConfigDocumentoService) {
    super(service);
  }
}
