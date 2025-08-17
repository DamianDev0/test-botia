import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateKardexDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'SALDO INICIAL': number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  stock: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  referencias: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'SKU PROV': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  modelos: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  entrada: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  salida: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codigo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  foto: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sku: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  categoria: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  descripcion: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'MARCA REFERENCIA': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'TIPO VEHICULO': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  subcategoria: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  estado: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  marca: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  iva: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'VALOR UNITARIO': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nicho: string;
}
