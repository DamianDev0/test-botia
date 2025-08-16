import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreatePedidosDetDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  TIPOGOLPE: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CCOSTOS: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  DESCRIPCION: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  GENERICO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ASEGURADORA: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ANULADO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  VENDEDOR: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  CANTIDAD: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  FACTURA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  FECHAINICIADO: Date;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ORDEN: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID_MOVIMIENTO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  VALOR: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  TARIFAIVA: number;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  FECHATERMINADO: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  REFERENCIA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  VALE: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  IMPREVISTO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NUMERO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ENTREGADO: number;
}
