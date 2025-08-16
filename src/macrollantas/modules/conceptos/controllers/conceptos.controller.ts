import { Controller } from '@nestjs/common';
import { Conceptos } from '../entities/conceptos.entity';
import { CreateConceptosDto } from '../dto/create-conceptos.dto';
import { UpdateConceptosDto } from '../dto/update-conceptos.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ConceptosService } from '../services/conceptos.service';

@Controller('conceptos')
export class ConceptosController extends BaseController<
  Conceptos,
  CreateConceptosDto,
  UpdateConceptosDto
>('conceptos', CreateConceptosDto, UpdateConceptosDto) {
  constructor(service: ConceptosService) {
    super(service);
  }
}
