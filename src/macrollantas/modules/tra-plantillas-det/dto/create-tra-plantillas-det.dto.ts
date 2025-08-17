import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateTraPlantillasDetDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  cantidad: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idTraPlantilla: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  tiempo: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  orden: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numero: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  iva: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  notas: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  componente: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  categoria: string;

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
  estado: string;

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
  tipo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  origen: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  aprobacion: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codigo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  descripcion: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'VRU HOMOLOGADO': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  unidad: string;
}
