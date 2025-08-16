import { PartialType } from '@nestjs/swagger';
import { CreateConfigQrDetDto } from './create-config-qr-det.dto';

export class UpdateConfigQrDetDto extends PartialType(CreateConfigQrDetDto) {}
