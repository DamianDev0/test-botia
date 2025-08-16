import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateHelpDetDto {
  @IsString()
  @ApiProperty()
  helpId: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  @ApiPropertyOptional()
  title: string;

  @IsString()
  @ApiProperty()
  help: string;

  @IsNumber()
  @ApiProperty()
  order: number;
}
