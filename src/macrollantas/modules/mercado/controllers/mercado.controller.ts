import { Controller } from '@nestjs/common';
import { Mercado } from '../entities/mercado.entity';
import { CreateMercadoDto } from '../dto/create-mercado.dto';
import { UpdateMercadoDto } from '../dto/update-mercado.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { MercadoService } from '../services/mercado.service';

@Controller('mercado')
export class MercadoController extends BaseController<
  Mercado,
  CreateMercadoDto,
  UpdateMercadoDto
>('MERCADO', CreateMercadoDto, UpdateMercadoDto) {
  constructor(service: MercadoService) {
    super(service);
  }
}
