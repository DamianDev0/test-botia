import { Controller } from '@nestjs/common';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { FormaPago } from '../entities/forma-pago.entity';
import { CreateFormaPagoDto } from '../dto/create-forma-pago.dto';
import { UpdateFormaPagoDto } from '../dto/update-forma-pago.dto';
import { FormaPagoService } from '../services/forma-pago.service';

@Controller('forma-pago')
export class FormaPagoController extends BaseController<
  FormaPago,
  CreateFormaPagoDto,
  UpdateFormaPagoDto
>('FORMA PAGO', CreateFormaPagoDto, UpdateFormaPagoDto) {
  constructor(service: FormaPagoService) {
    super(service);
  }
}
