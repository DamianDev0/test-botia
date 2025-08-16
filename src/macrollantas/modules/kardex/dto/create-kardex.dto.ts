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
  STOCK: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  REFERENCIAS: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TIPO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'SKU PROV': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  MODELOS: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ENTRADA: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  SALIDA: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CODIGO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  FOTO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SKU: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CATEGORIA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  DESCRIPCION: string;

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
  SUBCATEGORIA: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  ESTADO: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  MARCA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  IVA: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'VALOR UNITARIO': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NICHO: string;
}
