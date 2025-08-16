import { PartialType } from '@nestjs/swagger';
import { CreateDtnTiempoDto } from './create-dtn-tiempo.dto';

export class UpdateDtnTiempoDto extends PartialType(CreateDtnTiempoDto) {}
