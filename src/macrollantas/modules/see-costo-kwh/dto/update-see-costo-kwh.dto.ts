import { PartialType } from '@nestjs/swagger';
import { CreateSeeCostoKwhDto } from './create-see-costo-kwh.dto';

export class UpdateSeeCostoKwhDto extends PartialType(CreateSeeCostoKwhDto) {}
