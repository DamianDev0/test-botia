import { PartialType } from '@nestjs/swagger';
import { CreateConfigAutogestionDto } from './create-config-autogestion.dto';

export class UpdateConfigAutogestionDto extends PartialType(
  CreateConfigAutogestionDto,
) {}
