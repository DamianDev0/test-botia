import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateUsuarios1Dto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'CANTIDAD ESCANEADA': number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  COLUMNA: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  AREA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  UBICACION: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  NIVEL: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  FILA: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  USUARIO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  FECHA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'CANTIDAD FISICA': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  BODEGA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID: string;
}
