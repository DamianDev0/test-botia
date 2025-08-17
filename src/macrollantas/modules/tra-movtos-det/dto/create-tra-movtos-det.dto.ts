import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateTraMovtosDetDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codigo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'NUMERO REMISION': string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'CANTIDAD EXI': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'NOMBRE PROVEEDOR': string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  cantidad: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  notas: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  accion: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  notas2: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'VRU HOMOLOGADO': number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'VRU ORIGINAL': number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  tiempo: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  aprobacion: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'DESCRIPCION 2': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  componente: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  operacion: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  iva: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  origen: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idTraCotizacion: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'NUMERO SALIDA': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  unidad: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'CANTIDAD DES': number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'VRT ORIGINAL': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'NIT PROVEEDOR': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'NUMERO ASOCIADO': string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  orden: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'VRT HOMOLOGADO': number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'CANTIDAD PLA': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  notas1: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipo: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'CANTIDAD PED': number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'CANTIDAD PEN': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tecnico: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'CONCEPTO ASOCIADO': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  descripcion: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'NUMERO FACTURA': string;
}
