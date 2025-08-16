import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateTraPeriodosDto {
  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  'FECHA FINAL': Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  'FECHA INICIAL': Date;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  AÑO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  MES: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  PERIODO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;
}
