import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateOreparacion22000Dto {
  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  FECHAINICIADO: Date;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ANULADO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  VALE: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CCOSTOS: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  FECHATERMINADO: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  FACTURA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  DESCRIPCION: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ORDEN: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  TIPOGOLPE: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  VALOR: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  TARIFAIVA: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NUMERO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  CANTIDAD: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ENTREGADO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ASEGURADORA: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  GENERICO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  VENDEDOR: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  REFERENCIA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  IMPREVISTO: string;
}
