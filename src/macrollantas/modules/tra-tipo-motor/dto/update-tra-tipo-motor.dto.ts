import { PartialType } from '@nestjs/swagger';
import { CreateTraTipoMotorDto } from './create-tra-tipo-motor.dto';

export class UpdateTraTipoMotorDto extends PartialType(CreateTraTipoMotorDto) {}
