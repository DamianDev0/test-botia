import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateCuestionariosPDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  instructor: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  pregunta: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  me_gusta: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_categoria: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipo_calificacion: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  alcance: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  url_foto: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  contenido: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  opciones: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_subcategoria: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  orden: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  respuesta: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  titulo: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fecha_pregunta: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_sucursal: string;
}
