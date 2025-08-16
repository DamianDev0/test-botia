import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateTraPlantillasDetDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  CANTIDAD: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID_TRA_PLANTILLA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  TIEMPO: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ORDEN: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  NUMERO: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  IVA: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NOTAS: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  COMPONENTE: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CATEGORIA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'VRU ORIGINAL': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'DESCRIPCION 2': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'VRT HOMOLOGADO': number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'VRT ORIGINAL': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TIPO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ORIGEN: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  APROBACION: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CODIGO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  DESCRIPCION: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'VRU HOMOLOGADO': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  UNIDAD: string;
}
