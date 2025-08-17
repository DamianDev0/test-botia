import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateContenidosDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numVisitas: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numCalificaciones: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  valCostoAnterior: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numVentas: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numCapitulos: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  valCosto: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numNivel: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idUsuario: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  urlAudio: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nomIdioma: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  urlFoto: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fecCreacion: Date;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numCalPromedio: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numDuracion: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nomTraduccion: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numEstudiantes: number;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fecActualizacion: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  urlVideo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nomSubtitulo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nomTitulo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idCategoria: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idSubcategoria: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fecPublicacion: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  urlTexto: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  indEstado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;
}
