import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateConfigDetalleDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'TIPO DATO': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  FORMATO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  LOCATION: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'VALOR INICIAL': string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  FILA: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  COLUMNA: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'COLOR LETRA': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CAMPO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  RADIUS: number;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  'TIPO LABEL': boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  INDICE: boolean;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  SIZE: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  DOCUMENTO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TABLA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ORDEN: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  COLOR: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  CONTAINER: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  FONT: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  REQUERIDO: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  FORMULA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  QUERY: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ACCION: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  COMPONENTE: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  HEIGHT: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  RUTA: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  VISIBLE: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  EDITABLE: boolean;
}
