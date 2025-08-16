import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateTraCotizacionDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'FORMA PAGO': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'TIPO ROMBO': string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  FECHA: Date;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  TIEMPO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ASESOR: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'TIPO VISTA': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'TIPO VENTA': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'NOTAS CLIENTE': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  PLACA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  REFERENCIA2: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  'FECHA CREACION': Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  USUARIO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NIT: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  MOVIMIENTO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ROMBO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NOMBRE: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  BODEGA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'TIPO MOTOR': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMAIL: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUBCATEGORIA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NOTAS: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  'FECHA VENCE': Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  REFERENCIA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  KILOMETRAJE: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TELEFONO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NUMERO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CONCEPTO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'TIPO VEHICULO': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CATEGORIA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  MARCA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  PLAZO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'BODEGA DESTINO': string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  MODELO: number;
}
