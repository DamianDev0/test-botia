import { Controller } from '@nestjs/common';
import { ConfigQr } from '../entities/config-qr.entity';
import { CreateConfigQrDto } from '../dto/create-config-qr.dto';
import { UpdateConfigQrDto } from '../dto/update-config-qr.dto';
import { BaseController } from 'src/macrollantas/common/controllers/base-controller.controller';
import { ConfigQrService } from '../services/config-qr.service';

@Controller('config-qr')
export class ConfigQrController extends BaseController<
  ConfigQr,
  CreateConfigQrDto,
  UpdateConfigQrDto
>('CONFIG_QR', CreateConfigQrDto, UpdateConfigQrDto) {
  constructor(service: ConfigQrService) {
    super(service);
  }
}
