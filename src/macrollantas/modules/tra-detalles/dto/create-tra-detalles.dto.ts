import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateTraDetallesDto {
  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fec_proceso: Date;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_total: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tip_rombo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_subgrupo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  num_nit: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nom_codigo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  fecha_final: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_tiempo_proceso: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  can_pedida: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_tiempo_total: number;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fecha_inicial: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_placa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_grupo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_email: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_evento: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_tecnico: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_item: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_ubicacion_bodega: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nom_cliente: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  num_rombo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_proceso: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_ubicacion: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ind_estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_codigo: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  can_despachada: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_empresa: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  can_existencia: number;
}
