import { Controller } from '@nestjs/common';
import { SeeVariables } from '../entities/see-variables.entity';
import { CreateSeeVariablesDto } from '../dto/create-see-variables.dto';
import { UpdateSeeVariablesDto } from '../dto/update-see-variables.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { SeeVariablesService } from '../services/see-variables.service';

@Controller('see-variables')
export class SeeVariablesController extends BaseController<
  SeeVariables,
  CreateSeeVariablesDto,
  UpdateSeeVariablesDto
>('see_variables', CreateSeeVariablesDto, UpdateSeeVariablesDto) {
  constructor(service: SeeVariablesService) {
    super(service);
  }
}
