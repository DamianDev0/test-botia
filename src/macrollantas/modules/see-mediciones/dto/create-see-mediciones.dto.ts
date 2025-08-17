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
  mes: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idDispositivo: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  promedio: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  dia: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  minimo: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  hora: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  maximo: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idVariable: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  frecuencia: string;
}
