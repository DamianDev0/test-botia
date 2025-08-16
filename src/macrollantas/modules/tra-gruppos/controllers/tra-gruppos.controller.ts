import { Controller } from '@nestjs/common';
import { TraGruppos } from '../entities/tra-gruppos.entity';
import { CreateTraGrupposDto } from '../dto/create-tra-gruppos.dto';
import { UpdateTraGrupposDto } from '../dto/update-tra-gruppos.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { TraGrupposService } from '../services/tra-gruppos.service';

@Controller('tra-gruppos')
export class TraGrupposController extends BaseController<
  TraGruppos,
  CreateTraGrupposDto,
  UpdateTraGrupposDto
>('tra_gruppos', CreateTraGrupposDto, UpdateTraGrupposDto) {
  constructor(service: TraGrupposService) {
    super(service);
  }
}
