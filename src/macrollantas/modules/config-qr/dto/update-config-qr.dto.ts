import { PartialType } from '@nestjs/swagger';
import { CreateConfigQrDto } from './create-config-qr.dto';

export class UpdateConfigQrDto extends PartialType(CreateConfigQrDto) {}
