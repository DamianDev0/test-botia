import { IsString } from 'class-validator';

export class CreateTraCilindrajeDto {
  @IsString()
  idp: string;
}
