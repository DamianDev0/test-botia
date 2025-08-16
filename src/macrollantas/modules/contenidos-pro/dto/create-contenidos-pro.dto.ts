import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateContenidosProDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_contenido_sub: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_contenido_rec: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_usuario: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_avance: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_final: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_inicial: number;
}
