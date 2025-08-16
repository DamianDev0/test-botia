import { PartialType } from '@nestjs/swagger';
import { CreateVersionesDetDto } from './create-versiones-det.dto';

export class UpdateVersionesDetDto extends PartialType(CreateVersionesDetDto) {}
