import { PartialType } from '@nestjs/swagger';
import { CreateTraCotizacionTotDto } from './create-tra-cotizacion-tot.dto';

export class UpdateTraCotizacionTotDto extends PartialType(CreateTraCotizacionTotDto) {}
