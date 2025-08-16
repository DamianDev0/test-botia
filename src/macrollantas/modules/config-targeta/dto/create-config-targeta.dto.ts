import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  IsNumber,
  IsDateString,
  IsBoolean,
} from 'class-validator';

export class CreateConfigTargetaDto {
  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  'FECHA FINAL': Date;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ORDEN: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'VALOR ACTIVO': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  IMAGEN: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'ACCION 1': string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  'FECHA INICIAL': Date;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  COMPARTIR: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TEXTO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'ACCION 3': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CLIENTE: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'VALOR INACTIVO': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CATEGORIA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'LISTA DESEOS': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUBTITULO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TITULO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'VALOR PROMO': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'ACCION 2': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUBCATEGORIA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'LISTA PEDIDO': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  COMPONENTES: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'ID PLANTILLA': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'IMAGEN PROMO': string;
}
