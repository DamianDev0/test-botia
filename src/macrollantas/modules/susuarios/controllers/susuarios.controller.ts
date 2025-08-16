import { Controller } from '@nestjs/common';
import { Susuarios } from '../entities/susuarios.entity';
import { CreateSusuariosDto } from '../dto/create-susuarios.dto';
import { UpdateSusuariosDto } from '../dto/update-susuarios.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { SusuariosService } from '../services/susuarios.service';

@Controller('susuarios')
export class SusuariosController extends BaseController<
  Susuarios,
  CreateSusuariosDto,
  UpdateSusuariosDto
>('susuarios', CreateSusuariosDto, UpdateSusuariosDto) {
  constructor(service: SusuariosService) {
    super(service);
  }
}
