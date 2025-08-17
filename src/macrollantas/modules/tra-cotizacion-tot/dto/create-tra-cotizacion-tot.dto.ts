import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateTraCotizacionTotDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

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
  'CONCEPTO CONTABLE': string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  total: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fecha: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idTraCotizacion: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  concepto: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  numero: string;
}
