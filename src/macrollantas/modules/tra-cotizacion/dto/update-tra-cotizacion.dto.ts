import { PartialType } from '@nestjs/swagger';
import { CreateTraCotizacionDto } from './create-tra-cotizacion.dto';

export class UpdateTraCotizacionDto extends PartialType(CreateTraCotizacionDto) {}
