import { PartialType } from '@nestjs/swagger';
import { CreateTraTiposVehDto } from './create-tra-tipos-veh.dto';

export class UpdateTraTiposVehDto extends PartialType(CreateTraTiposVehDto) {}
