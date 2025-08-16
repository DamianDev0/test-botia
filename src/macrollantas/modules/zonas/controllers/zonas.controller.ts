import { Controller } from '@nestjs/common';
import { Zonas } from '../entities/zonas.entity';
import { CreateZonasDto } from '../dto/create-zonas.dto';
import { UpdateZonasDto } from '../dto/update-zonas.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ZonasService } from '../services/zonas.service';

@Controller('zonas')
export class ZonasController extends BaseController<
  Zonas,
  CreateZonasDto,
  UpdateZonasDto
>('ZONAS', CreateZonasDto, UpdateZonasDto) {
  constructor(service: ZonasService) {
    super(service);
  }
}
