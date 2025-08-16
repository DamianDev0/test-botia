import { PartialType } from '@nestjs/swagger';
import { CreateConfigCotizaDto } from './create-config-cotiza.dto';

export class UpdateConfigCotizaDto extends PartialType(CreateConfigCotizaDto) {}
