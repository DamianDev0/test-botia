import { Controller } from '@nestjs/common';
import { SeeVariablesDet } from '../entities/see-variables-det.entity';
import { CreateSeeVariablesDetDto } from '../dto/create-see-variables-det.dto';
import { UpdateSeeVariablesDetDto } from '../dto/update-see-variables-det.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { SeeVariablesDetService } from '../services/see-variables-det.service';

@Controller('see-variables-det')
export class SeeVariablesDetController extends BaseController<
  SeeVariablesDet,
  CreateSeeVariablesDetDto,
  UpdateSeeVariablesDetDto
>('see_variables_det', CreateSeeVariablesDetDto, UpdateSeeVariablesDetDto) {
  constructor(service: SeeVariablesDetService) {
    super(service);
  }
}
