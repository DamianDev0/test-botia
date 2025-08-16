import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  IsNumber,
  IsDateString,
  IsBoolean,
} from 'class-validator';

export class CreateTraMatriculasDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CODIGO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ENTRADA: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  FECHA: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'NUMERO DOCTO': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'TIPO DOCTO': string;

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
  NUMERO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NIT: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NOTAS: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  ESTADO: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  REFERENCIA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  CANTIDAD: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CONCEPTO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  REMISION: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  FACTURA: string;
}
