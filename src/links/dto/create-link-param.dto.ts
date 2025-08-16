import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateLinkParamDto {
  @IsString()
  @ApiProperty()
  linkId: string;

  @IsString()
  @ApiProperty()
  attribute: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  format: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  order: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  dataType: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  value: string;
}
