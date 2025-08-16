import { PartialType } from '@nestjs/swagger';
import { CreateTraProcesosTiemposColoresDto } from './create-tra-procesos-tiempos-colores.dto';

export class UpdateTraProcesosTiemposColoresDto extends PartialType(CreateTraProcesosTiemposColoresDto) {}
