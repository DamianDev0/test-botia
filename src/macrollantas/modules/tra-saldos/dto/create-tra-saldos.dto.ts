import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateTraSaldosDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  valCosto: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipo: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  canSaldo: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  canEntradas: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  referencia: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sku: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  valPrecio: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  periodo: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  canSalidas: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  fecha: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  valSalidas: number;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  estado: boolean;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  valInicial: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  valEntradas: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  canInicial: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipov: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  valSaldo: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;
}
