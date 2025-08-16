import { Controller } from '@nestjs/common';
import { Rombo } from '../entities/rombo.entity';
import { CreateRomboDto } from '../dto/create-rombo.dto';
import { UpdateRomboDto } from '../dto/update-rombo.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { RomboService } from '../services/rombo.service';

@Controller('rombo')
export class RomboController extends BaseController<
  Rombo,
  CreateRomboDto,
  UpdateRomboDto
>('rombo', CreateRomboDto, UpdateRomboDto) {
  constructor(service: RomboService) {
    super(service);
  }
}
