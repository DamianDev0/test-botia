import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateConfigFormularioDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ORDEN: number;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  EDITABLE: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  FORMATO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'VALOR INICIAL': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  VISTA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TABLA: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  ESCANEAR: boolean;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  MINIMO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  FORMULA: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  REQUERIDO: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'BASE DATOS': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  DESCRIPCION: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'TIPO DATO': string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  MAXIMO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CAMPO: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  VISIBLE: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  CLAVE: boolean;
}
