import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateTraProcesosTiemposDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tip_recurso: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nom_proceso: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_medida: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_proceso: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ind_estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_codigo_proveedor: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_tiempo: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TIPO: string;
}
