import { PartialType } from '@nestjs/swagger';
import { CreateTraProcesosDto } from './create-tra-procesos.dto';

export class UpdateTraProcesosDto extends PartialType(CreateTraProcesosDto) {}
