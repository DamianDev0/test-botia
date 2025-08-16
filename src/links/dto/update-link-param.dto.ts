import { PartialType } from '@nestjs/swagger';
import { CreateLinkParamDto } from './create-link-param.dto';

export class UpdateLinkParamDto extends PartialType(CreateLinkParamDto) {}
