import { Controller } from '@nestjs/common';
import { TraFisico } from '../entities/tra-fisico.entity';
import { CreateTraFisicoDto } from '../dto/create-tra-fisico.dto';
import { UpdateTraFisicoDto } from '../dto/update-tra-fisico.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraFisicoService } from '../services/tra-fisico.service';

@Controller('tra-fisico')
export class TraFisicoController extends BaseController<
  TraFisico,
  CreateTraFisicoDto,
  UpdateTraFisicoDto
>('tra_fisico', CreateTraFisicoDto, UpdateTraFisicoDto) {
  constructor(service: TraFisicoService) {
    super(service);
  }
}
