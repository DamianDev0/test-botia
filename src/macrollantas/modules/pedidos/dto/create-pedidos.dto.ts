import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreatePedidosDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nit: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  bodega: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  iva: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NÚMERO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  temp: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nombre: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  observaciones: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  mercadeo: number;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fechacreacion: Date;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  impreso: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  mes: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  liquidar: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  rombo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  vendedor: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  espera: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  patio: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  valoraprobado: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  titulo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  claveusuario: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  cerrada: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  kilometraje: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  anulado: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'VALOR PROMO': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  telefono: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idMovimiento: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fecha: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  placa: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  valor: number;
}
