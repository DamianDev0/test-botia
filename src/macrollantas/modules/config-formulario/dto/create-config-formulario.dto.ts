import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateConfigFormularioDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  orden: number;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  editable: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  formato: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'VALOR INICIAL': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  vista: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tabla: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  escanear: boolean;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  minimo: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  formula: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  requerido: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'BASE DATOS': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  descripcion: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'TIPO DATO': string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  maximo: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  campo: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  visible: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  clave: boolean;
}
