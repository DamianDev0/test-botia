import { PartialType } from '@nestjs/swagger';
import { CreateTraCotizacionDetDto } from './create-tra-cotizacion-det.dto';

export class UpdateTraCotizacionDetDto extends PartialType(CreateTraCotizacionDetDto) {}
