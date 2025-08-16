import { PartialType } from '@nestjs/swagger';
import { CreateTraPeriodosDto } from './create-tra-periodos.dto';

export class UpdateTraPeriodosDto extends PartialType(CreateTraPeriodosDto) {}
