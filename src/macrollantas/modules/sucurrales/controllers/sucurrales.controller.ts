import { Controller } from '@nestjs/common';
import { Sucurrales } from '../entities/sucurrales.entity';
import { CreateSucurralesDto } from '../dto/create-sucurrales.dto';
import { UpdateSucurralesDto } from '../dto/update-sucurrales.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { SucurralesService } from '../services/sucurrales.service';

@Controller('sucurrales')
export class SucurralesController extends BaseController<
  Sucurrales,
  CreateSucurralesDto,
  UpdateSucurralesDto
>('sucurrales', CreateSucurralesDto, UpdateSucurralesDto) {
  constructor(service: SucurralesService) {
    super(service);
  }
}
