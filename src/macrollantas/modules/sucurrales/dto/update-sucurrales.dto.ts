import { PartialType } from '@nestjs/swagger';
import { CreateSucurralesDto } from './create-sucurrales.dto';

export class UpdateSucurralesDto extends PartialType(CreateSucurralesDto) {}
