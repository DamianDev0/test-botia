import { PartialType } from '@nestjs/swagger';
import { CreateUsuarios1Dto } from './create-usuarios1.dto';

export class UpdateUsuarios1Dto extends PartialType(CreateUsuarios1Dto) {}
