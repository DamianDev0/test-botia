import { Controller } from '@nestjs/common';
import { TraMatriculasCar } from '../entities/tra-matriculas-car.entity';
import { CreateTraMatriculasCarDto } from '../dto/create-tra-matriculas-car.dto';
import { UpdateTraMatriculasCarDto } from '../dto/update-tra-matriculas-car.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraMatriculasCarService } from '../services/tra-matriculas-car.service';

@Controller('tra-matriculas-car')
export class TraMatriculasCarController extends BaseController<
  TraMatriculasCar,
  CreateTraMatriculasCarDto,
  UpdateTraMatriculasCarDto
>('tra_matriculas_car', CreateTraMatriculasCarDto, UpdateTraMatriculasCarDto) {
  constructor(service: TraMatriculasCarService) {
    super(service);
  }
}
