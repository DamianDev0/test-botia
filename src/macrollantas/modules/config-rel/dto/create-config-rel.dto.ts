import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateConfigRelDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ind_estado: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  alto: number;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fecha_inicial: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  color_fondo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_recurso: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  size_font: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_relacionado: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fecha_final: Date;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ancho: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  posicion: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  color_letra: string;
}
