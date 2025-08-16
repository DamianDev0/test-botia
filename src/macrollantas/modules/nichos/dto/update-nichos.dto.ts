import { PartialType } from '@nestjs/swagger';
import { CreateNichosDto } from './create-nichos.dto';

export class UpdateNichosDto extends PartialType(CreateNichosDto) {}
