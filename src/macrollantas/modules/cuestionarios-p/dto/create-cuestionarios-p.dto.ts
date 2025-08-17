import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateCuestionariosPDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idEmpresa: string;

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
  meGusta: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idCategoria: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipoCalificacion: string;

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
  urlFoto: string;

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
  idSubcategoria: string;

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
  fechaPregunta: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idSucursal: string;
}
