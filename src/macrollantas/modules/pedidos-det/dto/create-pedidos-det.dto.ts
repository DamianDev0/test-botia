import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreatePedidosDetDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  tipogolpe: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ccostos: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  descripcion: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  generico: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  aseguradora: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  anulado: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  vendedor: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  cantidad: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  factura: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fechainiciado: Date;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  orden: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idMovimiento: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  valor: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  tarifaiva: number;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fechaterminado: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  referencia: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  vale: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  imprevisto: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  numero: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  entregado: number;
}
