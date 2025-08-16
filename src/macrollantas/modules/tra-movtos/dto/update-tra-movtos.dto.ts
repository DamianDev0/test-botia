import { PartialType } from '@nestjs/swagger';
import { CreateTraMovtosDto } from './create-tra-movtos.dto';

export class UpdateTraMovtosDto extends PartialType(CreateTraMovtosDto) {}
