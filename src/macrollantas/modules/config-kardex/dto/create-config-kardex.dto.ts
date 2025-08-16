import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateConfigKardexDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ORDEN: number;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  MULTISELECCION: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TITULO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  VER: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  DESCRIPCION: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'VALOR POR DEFECTO': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TABLA: string;
}
