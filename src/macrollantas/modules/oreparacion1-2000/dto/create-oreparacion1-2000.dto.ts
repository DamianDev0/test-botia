import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateOreparacion12000Dto {
  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fechacreacion: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  claveusuario: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  observaciones: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fecha: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nit: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  iva: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  rombo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  mes: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  impreso: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  vendedor: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  anulado: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  bodega: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NÚMERO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  patio: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  cerrada: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  valoraprobado: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  liquidar: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  mercadeo: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  temp: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  espera: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  kilometraje: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  placa: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  valor: number;
}
