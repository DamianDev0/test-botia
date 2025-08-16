import { Controller } from '@nestjs/common';
import { Claves } from '../entities/keys.entity';
import { CreateKeysDto } from '../dto/create-keys.dto';
import { UpdateKeysDto } from '../dto/update-keys.dto';
import { KeysService } from '../services/keys.service';
import { BaseController } from '../../../common/controllers/base-controller.controller';

@Controller('keys')
export class KeysController extends BaseController<
  Claves,
  CreateKeysDto,
  UpdateKeysDto
>('Claves', CreateKeysDto, UpdateKeysDto) {
  constructor(service: KeysService) {
    super(service);
  }
}
