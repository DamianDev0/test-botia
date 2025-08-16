import { PartialType } from '@nestjs/swagger';
import { CreateTraSaldosDto } from './create-tra-saldos.dto';

export class UpdateTraSaldosDto extends PartialType(CreateTraSaldosDto) {}
