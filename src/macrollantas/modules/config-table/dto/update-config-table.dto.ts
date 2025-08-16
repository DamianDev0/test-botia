import { PartialType } from '@nestjs/swagger';
import { CreateConfigTableDto } from './create-config-table.dto';

export class UpdateConfigTableDto extends PartialType(CreateConfigTableDto) {}
