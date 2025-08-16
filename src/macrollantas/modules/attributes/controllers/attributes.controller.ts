import { Controller } from '@nestjs/common';
import { Atributos } from '../entities/attributes.entity';
import { CreateAttributeDto } from '../dto/create-attribute.dto';
import { UpdateAttributeDto } from '../dto/update-attribute.dto';
import { AttributesService } from '../services/attributes.service';
import { BaseController } from '../../../common/controllers/base-controller.controller';

@Controller('attributes')
export class AttributesController extends BaseController<
  Atributos,
  CreateAttributeDto,
  UpdateAttributeDto
>('Atributos', CreateAttributeDto, UpdateAttributeDto) {
  constructor(service: AttributesService) {
    super(service);
  }
}
