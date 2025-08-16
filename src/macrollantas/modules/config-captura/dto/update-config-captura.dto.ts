import { PartialType } from '@nestjs/swagger';
import { CreateConfigCapturaDto } from './create-config-captura.dto';

export class UpdateConfigCapturaDto extends PartialType(CreateConfigCapturaDto) {}
