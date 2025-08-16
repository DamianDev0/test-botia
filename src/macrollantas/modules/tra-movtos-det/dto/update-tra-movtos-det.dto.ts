import { PartialType } from '@nestjs/swagger';
import { CreateTraMovtosDetDto } from './create-tra-movtos-det.dto';

export class UpdateTraMovtosDetDto extends PartialType(CreateTraMovtosDetDto) {}
