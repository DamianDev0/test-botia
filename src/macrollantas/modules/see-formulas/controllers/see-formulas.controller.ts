import { Controller } from '@nestjs/common';
import { SeeFormulas } from '../entities/see-formulas.entity';
import { CreateSeeFormulasDto } from '../dto/create-see-formulas.dto';
import { UpdateSeeFormulasDto } from '../dto/update-see-formulas.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { SeeFormulasService } from '../services/see-formulas.service';

@Controller('see-formulas')
export class SeeFormulasController extends BaseController<
  SeeFormulas,
  CreateSeeFormulasDto,
  UpdateSeeFormulasDto
>('see_formulas', CreateSeeFormulasDto, UpdateSeeFormulasDto) {
  constructor(service: SeeFormulasService) {
    super(service);
  }
}
