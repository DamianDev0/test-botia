import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateTraFisicoDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  PERIODO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'UNIDAD DE MEDIDA': string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  CANTIDAD: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  BODEGA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ICONO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'CANTIDAD POR UNIDAD': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'CANTIDAD TOTAL': number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  COSTO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  REFERENCIA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  UBICACION: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  PRECIO: number;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  FECHA: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  PLU: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  DESCRIPCION: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'SKU PROV': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  USUARIO: string;
}
