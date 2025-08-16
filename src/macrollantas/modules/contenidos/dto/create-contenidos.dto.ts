import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateContenidosDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_visitas: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_calificaciones: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  val_costo_anterior: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_ventas: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_capitulos: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  val_costo: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_nivel: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_usuario: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  url_audio: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nom_idioma: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  url_foto: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fec_creacion: Date;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_cal_promedio: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_duracion: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nom_traduccion: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_estudiantes: number;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fec_actualizacion: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  url_video: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nom_subtitulo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nom_titulo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_categoria: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_subcategoria: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fec_publicacion: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  url_texto: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ind_estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;
}
