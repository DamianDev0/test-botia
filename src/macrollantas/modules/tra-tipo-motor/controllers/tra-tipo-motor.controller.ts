import { Controller } from '@nestjs/common';
import { TraTipoMotor } from '../entities/tra-tipo-motor.entity';
import { CreateTraTipoMotorDto } from '../dto/create-tra-tipo-motor.dto';
import { UpdateTraTipoMotorDto } from '../dto/update-tra-tipo-motor.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraTipoMotorService } from '../services/tra-tipo-motor.service';

@Controller('tra-tipo-motor')
export class TraTipoMotorController extends BaseController<
  TraTipoMotor,
  CreateTraTipoMotorDto,
  UpdateTraTipoMotorDto
>('tra_tipo_motor', CreateTraTipoMotorDto, UpdateTraTipoMotorDto) {
  constructor(service: TraTipoMotorService) {
    super(service);
  }
}
