import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateConfigZonasDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  COLUMNAS: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  PANEL: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  FILAS: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ZONA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TIPO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  CANTIDAD: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ALINEACION: string;
}
