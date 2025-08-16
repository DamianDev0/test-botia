import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateContenidosSubDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_subcapitulo: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ind_estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nom_titulo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_contenido_cap: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_clases: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_duracion: number;
}
