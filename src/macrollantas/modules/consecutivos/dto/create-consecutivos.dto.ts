import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateConsecutivosDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'S-NOMBRE': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numero: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  documento: string;
}
