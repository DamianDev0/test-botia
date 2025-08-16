import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateMotivosDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NOMBRE: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NICHO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ORDEN: number;
}
