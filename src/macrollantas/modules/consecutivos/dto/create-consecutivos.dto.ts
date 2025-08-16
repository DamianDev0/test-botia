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
  EMPRESA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  NUMERO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  DOCUMENTO: string;
}
