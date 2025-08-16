import { PartialType } from '@nestjs/swagger';
import { CreateTraCilindrajeDto } from './create-tra-cilindraje.dto';

export class UpdateTraCilindrajeDto extends PartialType(
  CreateTraCilindrajeDto,
) {}
