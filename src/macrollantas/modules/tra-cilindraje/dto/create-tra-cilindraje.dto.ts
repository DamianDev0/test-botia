import { IsString } from 'class-validator';

export class CreateTraCilindrajeDto {
  @IsString()
  IDP: string;
}
