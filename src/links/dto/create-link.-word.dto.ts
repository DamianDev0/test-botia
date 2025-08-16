import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLinkWordDto {
  @IsString()
  @ApiProperty()
  companyId: string;

  @IsString()
  @ApiProperty()
  officeId: string;

  @IsString()
  @ApiProperty()
  linkId: string;

  @IsString()
  @ApiProperty()
  word: string;

  @IsNumber()
  @ApiProperty()
  order: number;
}
