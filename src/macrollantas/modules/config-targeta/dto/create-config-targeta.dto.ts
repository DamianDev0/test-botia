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
  orden: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'VALOR ACTIVO': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  imagen: string;

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
  compartir: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  texto: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'ACCION 3': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cliente: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'VALOR INACTIVO': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  categoria: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'LISTA DESEOS': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  subtitulo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  titulo: string;

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
  subcategoria: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'LISTA PEDIDO': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  componentes: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'ID PLANTILLA': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'IMAGEN PROMO': string;
}
