import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  IsNumber,
  IsDateString,
  IsBoolean,
} from 'class-validator';

export class CreateCuestionariosDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  notas: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fechaRespuesta: Date;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  orden: number;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  denunciar: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  instructor: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  subcategoria: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  respuesta: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  calificacion: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  contenido: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  urlFoto: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fechaPregunta: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  opciones: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipoCalificacion: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  pregunta: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  urlVideo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  categoria: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  usuario: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  titulo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  alcance: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  megusta: boolean;
}
