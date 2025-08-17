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
  codigo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  entrada: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fecha: Date;

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
  subcategoria: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  categoria: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  numero: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nit: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  notas: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  estado: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  referencia: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  cantidad: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  concepto: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  remision: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  factura: string;
}
