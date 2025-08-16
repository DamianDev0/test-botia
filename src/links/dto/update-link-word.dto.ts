import { PartialType } from '@nestjs/swagger';
import { CreateLinkWordDto } from './create-link.-word.dto';

export class UpdateLinkWordDto extends PartialType(CreateLinkWordDto) {}
