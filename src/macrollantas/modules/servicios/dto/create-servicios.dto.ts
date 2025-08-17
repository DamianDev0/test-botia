import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateServiciosDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  servicio: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codigo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'UNIDAD DE MEDIDA': string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  costo: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  icono: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  orden: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipo: string;

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
  sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  subcategoria: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  categoria: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  referencia: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  inventario: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  descripcion: string;
}
