import { PartialType } from '@nestjs/swagger';
import { CreateServiciosDto } from './create-servicios.dto';

export class UpdateServiciosDto extends PartialType(CreateServiciosDto) {}
