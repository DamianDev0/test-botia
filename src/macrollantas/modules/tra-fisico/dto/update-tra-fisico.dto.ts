import { PartialType } from '@nestjs/swagger';
import { CreateTraFisicoDto } from './create-tra-fisico.dto';

export class UpdateTraFisicoDto extends PartialType(CreateTraFisicoDto) {}
