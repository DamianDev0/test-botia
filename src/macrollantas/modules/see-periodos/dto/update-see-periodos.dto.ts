import { PartialType } from '@nestjs/swagger';
import { CreateSeePeriodosDto } from './create-see-periodos.dto';

export class UpdateSeePeriodosDto extends PartialType(CreateSeePeriodosDto) {}
