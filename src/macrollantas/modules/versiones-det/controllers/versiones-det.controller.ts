import { Controller } from '@nestjs/common';
import { VersionesDet } from '../entities/versiones-det.entity';
import { CreateVersionesDetDto } from '../dto/create-versiones-det.dto';
import { UpdateVersionesDetDto } from '../dto/update-versiones-det.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { VersionesDetService } from '../services/versiones-det.service';

@Controller('versiones-det')
export class VersionesDetController extends BaseController<
  VersionesDet,
  CreateVersionesDetDto,
  UpdateVersionesDetDto
>('VERSIONES_DET', CreateVersionesDetDto, UpdateVersionesDetDto) {
  constructor(service: VersionesDetService) {
    super(service);
  }
}
