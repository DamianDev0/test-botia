import { PartialType } from '@nestjs/swagger';
import { CreateListapDto } from './create-listap.dto';

export class UpdateListapDto extends PartialType(CreateListapDto) {}
