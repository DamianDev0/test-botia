import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateContenidosRecDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  descripcion: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  contenido: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  orden: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  formato: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  formulario: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  descargar: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_rol: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  url_recurso: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  origen: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  titulo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  alcance: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  requerido: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_usuario: string;
}
