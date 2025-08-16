import { PartialType } from '@nestjs/swagger';
import { CreateTraProcesosTiemposDto } from './create-tra-procesos-tiempos.dto';

export class UpdateTraProcesosTiemposDto extends PartialType(CreateTraProcesosTiemposDto) {}
