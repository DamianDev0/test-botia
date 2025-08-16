import { Controller } from '@nestjs/common';
import { Versiones } from '../entities/versiones.entity';
import { CreateVersionesDto } from '../dto/create-versiones.dto';
import { UpdateVersionesDto } from '../dto/update-versiones.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { VersionesService } from '../services/versiones.service';

@Controller('versiones')
export class VersionesController extends BaseController<
  Versiones,
  CreateVersionesDto,
  UpdateVersionesDto
>('VERSIONES', CreateVersionesDto, UpdateVersionesDto) {
  constructor(service: VersionesService) {
    super(service);
  }
}
