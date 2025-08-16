import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreatePresupuestosDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'HORA FIN': number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'TOTAL HORAS': number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'PTO HORA': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  PROCESO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TEMPORADA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'NUMERO DIA': number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'PTO DIA': number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'HORA INICIO': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;
}
