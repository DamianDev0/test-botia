import { PartialType } from '@nestjs/swagger';
import { CreateOreparacion12000Dto } from './create-oreparacion1-2000.dto';

export class UpdateOreparacion12000Dto extends PartialType(CreateOreparacion12000Dto) {}
