import { PartialType } from '@nestjs/swagger';
import { CreateCollectionsDto } from './create-collections.dto';

export class UpdateCollectionsDto extends PartialType(CreateCollectionsDto) {}
