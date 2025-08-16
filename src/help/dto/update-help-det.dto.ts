import { PartialType } from '@nestjs/swagger';
import { CreateHelpDetDto } from './create-help-det.dto';

export class UpdateHelpDetDto extends PartialType(CreateHelpDetDto) {}
