import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateOreparacion12000Dto {
  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  FECHACREACION: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CLAVEUSUARIO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  OBSERVACIONES: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  FECHA: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NIT: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  IVA: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ROMBO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  MES: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  IMPRESO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  VENDEDOR: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ANULADO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  BODEGA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NÚMERO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  PATIO: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  CERRADA: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  VALORAPROBADO: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  LIQUIDAR: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  MERCADEO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TEMP: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ESPERA: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  KILOMETRAJE: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  PLACA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  VALOR: number;
}
