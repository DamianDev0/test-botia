import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateContenidosDetDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ind_tipo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_contenido: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_sucursal: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_orden: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nom_caracteristica: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ind_estado: string;
}
