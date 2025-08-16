import { Controller } from '@nestjs/common';
import { SeeTemperaturaDet } from '../entities/see-temperatura-det.entity';
import { CreateSeeTemperaturaDetDto } from '../dto/create-see-temperatura-det.dto';
import { UpdateSeeTemperaturaDetDto } from '../dto/update-see-temperatura-det.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { SeeTemperaturaDetService } from '../services/see-temperatura-det.service';

@Controller('see-temperatura-det')
export class SeeTemperaturaDetController extends BaseController<
  SeeTemperaturaDet,
  CreateSeeTemperaturaDetDto,
  UpdateSeeTemperaturaDetDto
>('see_temperatura_det', CreateSeeTemperaturaDetDto, UpdateSeeTemperaturaDetDto) {
  constructor(service: SeeTemperaturaDetService) {
    super(service);
  }
}
