import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreatePedidosDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NIT: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  BODEGA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  IVA: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NÚMERO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TEMP: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NOMBRE: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  OBSERVACIONES: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  MERCADEO: number;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  FECHACREACION: Date;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  IMPRESO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  MES: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  LIQUIDAR: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ROMBO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  VENDEDOR: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ESPERA: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  PATIO: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  VALORAPROBADO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TITULO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CLAVEUSUARIO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  CERRADA: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  KILOMETRAJE: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ANULADO: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'VALOR PROMO': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TELEFONO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID_MOVIMIENTO: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  FECHA: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  PLACA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  VALOR: number;
}
