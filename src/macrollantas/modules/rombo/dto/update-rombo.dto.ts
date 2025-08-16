import { PartialType } from '@nestjs/swagger';
import { CreateRomboDto } from './create-rombo.dto';

export class UpdateRomboDto extends PartialType(CreateRomboDto) {}
