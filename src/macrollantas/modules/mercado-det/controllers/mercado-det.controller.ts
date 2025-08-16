import { Controller } from '@nestjs/common';
import { MercadoDet } from '../entities/mercado-det.entity';
import { CreateMercadoDetDto } from '../dto/create-mercado-det.dto';
import { UpdateMercadoDetDto } from '../dto/update-mercado-det.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { MercadoDetService } from '../services/mercado-det.service';

@Controller('mercado-det')
export class MercadoDetController extends BaseController<
  MercadoDet,
  CreateMercadoDetDto,
  UpdateMercadoDetDto
>('MERCADO_DET', CreateMercadoDetDto, UpdateMercadoDetDto) {
  constructor(service: MercadoDetService) {
    super(service);
  }
}
