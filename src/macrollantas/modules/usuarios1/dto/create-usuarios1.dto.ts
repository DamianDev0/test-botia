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
  columna: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  area: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ubicacion: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  nivel: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  fila: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  usuario: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  fecha: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'CANTIDAD FISICA': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  bodega: string;
}
