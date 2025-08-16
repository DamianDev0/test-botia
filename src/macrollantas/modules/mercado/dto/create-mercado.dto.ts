import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateMercadoDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CATEGORIA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NIT: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  USUSARIO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NUMERO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  LOTE: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NOTAS: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CONCEPTO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  FACTURA: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  FECHA: Date;
}
