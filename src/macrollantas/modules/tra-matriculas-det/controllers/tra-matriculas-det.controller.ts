import { Controller } from '@nestjs/common';
import { TraMatriculasDet } from '../entities/tra-matriculas-det.entity';
import { CreateTraMatriculasDetDto } from '../dto/create-tra-matriculas-det.dto';
import { UpdateTraMatriculasDetDto } from '../dto/update-tra-matriculas-det.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraMatriculasDetService } from '../services/tra-matriculas-det.service';

@Controller('tra-matriculas-det')
export class TraMatriculasDetController extends BaseController<
  TraMatriculasDet,
  CreateTraMatriculasDetDto,
  UpdateTraMatriculasDetDto
>('tra_matriculas_det', CreateTraMatriculasDetDto, UpdateTraMatriculasDetDto) {
  constructor(service: TraMatriculasDetService) {
    super(service);
  }
}
