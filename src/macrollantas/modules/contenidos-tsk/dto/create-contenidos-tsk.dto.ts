import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  IsNumber,
  IsBoolean,
  IsDateString,
} from 'class-validator';

export class CreateContenidosTskDto {
  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fec_inicial: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_categoria: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_contenido: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nom_nombre: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nom_alcance: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_tiempo: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_calendario: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_ubicacion: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nom_frecuencia: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_tipo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_subcategoria: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_numero: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nom_pasos: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_ubicacion: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  ind_recordacion: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ind_prioridad: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_usuario: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_concepto: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nom_notas: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nom_dias: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fec_final: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ind_estado: string;
}
