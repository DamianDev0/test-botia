import { PartialType } from '@nestjs/swagger';
import { CreateTraMarcasDto } from './create-tra-marcas.dto';

export class UpdateTraMarcasDto extends PartialType(CreateTraMarcasDto) {}
