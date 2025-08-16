import { Controller } from '@nestjs/common';
import { COLECCIONES } from '../entities/collections.entity';
import { CreateCollectionsDto } from '../dto/create-collections.dto';
import { UpdateCollectionsDto } from '../dto/update-collections.dto';
import { CollectionsService } from '../services/collections.service';
import { BaseController } from '../../../common/controllers/base-controller.controller';

@Controller('collections')
export class CollectionsController extends BaseController<
  COLECCIONES,
  CreateCollectionsDto,
  UpdateCollectionsDto
>('COLECCIONES', CreateCollectionsDto, UpdateCollectionsDto) {
  constructor(service: CollectionsService) {
    super(service);
  }
}
