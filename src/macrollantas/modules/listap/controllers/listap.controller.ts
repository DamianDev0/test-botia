import { Controller } from '@nestjs/common';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ListAp } from '../entities/listap.entity';
import { CreateListapDto } from '../dto/create-listap.dto';
import { UpdateListapDto } from '../dto/update-listap.dto';
import { ListApService } from '../services/listap.service';

@Controller('listap')
export class ListapController extends BaseController<
  ListAp,
  CreateListapDto,
  UpdateListapDto
>('LISTAP', CreateListapDto, UpdateListapDto) {
  constructor(service: ListApService) {
    super(service);
  }
}
