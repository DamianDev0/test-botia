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
  formato: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  location: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'VALOR INICIAL': string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  fila: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  columna: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'COLOR LETRA': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  campo: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  radius: number;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  'TIPO LABEL': boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  indice: boolean;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  size: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  documento: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tabla: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  orden: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  color: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  container: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  font: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  requerido: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  formula: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  query: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  accion: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  componente: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  height: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ruta: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  visible: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  editable: boolean;
}
