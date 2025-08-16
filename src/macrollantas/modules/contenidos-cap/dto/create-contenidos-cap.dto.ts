import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateContenidosCapDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_duracion: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ind_estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nom_titulo: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_capitulo: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_clases: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_contenido: string;
}
