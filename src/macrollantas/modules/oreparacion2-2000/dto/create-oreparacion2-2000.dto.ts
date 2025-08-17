import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateOreparacion22000Dto {
  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fechainiciado: Date;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  anulado: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  vale: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ccostos: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fechaterminado: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  factura: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  descripcion: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  orden: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  tipogolpe: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  valor: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  tarifaiva: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  numero: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  cantidad: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  entregado: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  aseguradora: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  generico: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  vendedor: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  referencia: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  imprevisto: string;
}
