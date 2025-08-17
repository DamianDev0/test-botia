import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateMercadoDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  categoria: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nit: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ususario: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  numero: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  lote: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  notas: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  concepto: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  factura: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fecha: Date;
}
