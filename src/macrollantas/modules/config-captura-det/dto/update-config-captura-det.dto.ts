import { PartialType } from '@nestjs/swagger';
import { CreateConfigCapturaDetDto } from './create-config-captura-det.dto';

export class UpdateConfigCapturaDetDto extends PartialType(
  CreateConfigCapturaDetDto,
) {}
