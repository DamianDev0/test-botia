import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateServiciosDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SERVICIO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CODIGO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'UNIDAD DE MEDIDA': string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  COSTO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ICONO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ORDEN: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TIPO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'VALOR UNITARIO': number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'CANTIDAD POR UNIDAD': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUBCATEGORIA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CATEGORIA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  REFERENCIA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  INVENTARIO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  DESCRIPCION: string;
}
