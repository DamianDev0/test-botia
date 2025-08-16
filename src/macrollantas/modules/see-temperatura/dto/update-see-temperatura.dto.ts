import { PartialType } from '@nestjs/swagger';
import { CreateSeeTemperaturaDto } from './create-see-temperatura.dto';

export class UpdateSeeTemperaturaDto extends PartialType(CreateSeeTemperaturaDto) {}
