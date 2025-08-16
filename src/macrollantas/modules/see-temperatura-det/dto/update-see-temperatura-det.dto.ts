import { PartialType } from '@nestjs/swagger';
import { CreateSeeTemperaturaDetDto } from './create-see-temperatura-det.dto';

export class UpdateSeeTemperaturaDetDto extends PartialType(CreateSeeTemperaturaDetDto) {}
