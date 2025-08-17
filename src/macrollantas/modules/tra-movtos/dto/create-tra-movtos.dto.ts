import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateTraMovtosDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  email: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  bodega: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  usuario: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nombre: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  categoria: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  referencia: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  telefono: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  'FECHA CREACION': Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  subcategoria: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  asesor: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  referencia2: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  rombo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'TIPO VISTA': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'NOTAS CLIENTE': string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fecha: Date;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  kilometraje: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nit: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  movimiento: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'TIPO ROMBO': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  marca: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  tiempo: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  plazo: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'BODEGA DESTINO': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  numero: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'TIPO VEHICULO': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'TIPO MOTOR': string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  'FECHA VENCE': Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  placa: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  modelo: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  concepto: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'FORMA PAGO': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  notas: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'TIPO VENTA': string;
}
