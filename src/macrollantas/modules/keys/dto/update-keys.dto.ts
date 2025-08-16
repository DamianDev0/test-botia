import { PartialType } from '@nestjs/swagger';
import { CreateKeysDto } from './create-keys.dto';

export class UpdateKeysDto extends PartialType(CreateKeysDto) {}
