import { Controller } from '@nestjs/common';
import { Kardex } from '../entities/kardex.entity';
import { CreateKardexDto } from '../dto/create-kardex.dto';
import { UpdateKardexDto } from '../dto/update-kardex.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { KardexService } from '../services/kardex.service';

@Controller('kardex')
export class KardexController extends BaseController<
  Kardex,
  CreateKardexDto,
  UpdateKardexDto
>('kardex', CreateKardexDto, UpdateKardexDto) {
  constructor(service: KardexService) {
    super(service);
  }
}
