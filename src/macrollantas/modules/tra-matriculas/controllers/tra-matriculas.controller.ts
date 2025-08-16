import { Controller } from '@nestjs/common';
import { TraMatriculas } from '../entities/tra-matriculas.entity';
import { CreateTraMatriculasDto } from '../dto/create-tra-matriculas.dto';
import { UpdateTraMatriculasDto } from '../dto/update-tra-matriculas.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraMatriculasService } from '../services/tra-matriculas.service';

@Controller('tra-matriculas')
export class TraMatriculasController extends BaseController<
  TraMatriculas,
  CreateTraMatriculasDto,
  UpdateTraMatriculasDto
>('tra_matriculas', CreateTraMatriculasDto, UpdateTraMatriculasDto) {
  constructor(service: TraMatriculasService) {
    super(service);
  }
}
