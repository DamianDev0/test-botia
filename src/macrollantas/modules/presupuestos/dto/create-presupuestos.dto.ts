import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreatePresupuestosDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

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
  proceso: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  temporada: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

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
  estado: string;
}
