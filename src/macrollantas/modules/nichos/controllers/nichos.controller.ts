import { Controller } from '@nestjs/common';
import { Nichos } from '../entities/nichos.entity';
import { CreateNichosDto } from '../dto/create-nichos.dto';
import { UpdateNichosDto } from '../dto/update-nichos.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { NichosService } from '../services/nichos.service';

@Controller('nichos')
export class NichosController extends BaseController<
  Nichos,
  CreateNichosDto,
  UpdateNichosDto
>('NICHOS', CreateNichosDto, UpdateNichosDto) {
  constructor(service: NichosService) {
    super(service);
  }
}
