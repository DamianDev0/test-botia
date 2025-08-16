import { Controller } from '@nestjs/common';
import { ConfigQrDet } from '../entities/config-qr-det.entity';
import { CreateConfigQrDetDto } from '../dto/create-config-qr-det.dto';
import { UpdateConfigQrDetDto } from '../dto/update-config-qr-det.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ConfigQrDetService } from '../services/config-qr-det.service';

@Controller('config-qr-det')
export class ConfigQrDetController extends BaseController<
  ConfigQrDet,
  CreateConfigQrDetDto,
  UpdateConfigQrDetDto
>('CONFIG_QR_DET', CreateConfigQrDetDto, UpdateConfigQrDetDto) {
  constructor(service: ConfigQrDetService) {
    super(service);
  }
}
