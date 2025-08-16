import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateTraUbicacionesDto {
  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  FECHA: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  BODEGA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'CANTIDAD ESCANEADA': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  UBICACION: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  USUARIO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'CANTIDAD FISICA': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  FILA: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  AREA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  COLUMNA: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NIVEL: string;
}
