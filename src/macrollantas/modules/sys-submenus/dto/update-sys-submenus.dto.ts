import { PartialType } from '@nestjs/swagger';
import { CreateSysSubmenusDto } from './create-sys-submenus.dto';

export class UpdateSysSubmenusDto extends PartialType(CreateSysSubmenusDto) {}
