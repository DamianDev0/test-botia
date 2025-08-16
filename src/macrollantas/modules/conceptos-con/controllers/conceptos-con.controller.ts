import { Controller } from '@nestjs/common';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ConceptosCon } from '../entities/conceptos-co.entity';
import { CreateConceptosConDto } from '../dto/create-conceptos-con.dto';
import { UpdateConceptosConDto } from '../dto/update-conceptos-con.dto';
import { ConceptosConService } from '../services/conceptos-con.service';

@Controller('conceptos-con')
export class ConceptosConController extends BaseController<
  ConceptosCon,
  CreateConceptosConDto,
  UpdateConceptosConDto
>('CONCEPTOS_CON', CreateConceptosConDto, UpdateConceptosConDto) {
  constructor(service: ConceptosConService) {
    super(service);
  }
}
