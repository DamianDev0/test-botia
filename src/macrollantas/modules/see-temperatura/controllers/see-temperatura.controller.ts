import { Controller } from '@nestjs/common';
import { SeeTemperatura } from '../entities/see-temperatura.entity';
import { CreateSeeTemperaturaDto } from '../dto/create-see-temperatura.dto';
import { UpdateSeeTemperaturaDto } from '../dto/update-see-temperatura.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { SeeTemperaturaService } from '../services/see-temperatura.service';

@Controller('see-temperatura')
export class SeeTemperaturaController extends BaseController<
  SeeTemperatura,
  CreateSeeTemperaturaDto,
  UpdateSeeTemperaturaDto
>('see_temperatura', CreateSeeTemperaturaDto, UpdateSeeTemperaturaDto) {
  constructor(service: SeeTemperaturaService) {
    super(service);
  }
}
