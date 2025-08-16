import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateSeeMedicionesDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  AÑO: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  MES: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID_DISPOSITIVO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  PROMEDIO: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  DIA: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  MINIMO: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  HORA: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  MAXIMO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID_VARIABLE: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  FRECUENCIA: string;
}
