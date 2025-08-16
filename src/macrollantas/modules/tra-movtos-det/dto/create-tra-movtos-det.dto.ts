import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateTraMovtosDetDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CODIGO: string;

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
  CANTIDAD: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NOTAS: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ACCION: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NOTAS2: string;

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
  TIEMPO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  APROBACION: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'DESCRIPCION 2': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  COMPONENTE: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  OPERACION: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  IVA: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ORIGEN: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID_TRA_COTIZACION: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'NUMERO SALIDA': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  UNIDAD: string;

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
  ORDEN: number;

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
  NOTAS1: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TIPO: string;

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
  TECNICO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'CONCEPTO ASOCIADO': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  DESCRIPCION: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'NUMERO FACTURA': string;
}
