import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  IsNumber,
  IsBoolean,
  IsDateString,
} from 'class-validator';

export class CreateContenidosTskDto {
  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fecInicial: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idEmpresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idSucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idCategoria: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idContenido: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nomNombre: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nomAlcance: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numTiempo: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idCalendario: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codUbicacion: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nomFrecuencia: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codTipo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idSubcategoria: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numNumero: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nomPasos: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idUbicacion: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  indRecordacion: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  indPrioridad: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idUsuario: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idConcepto: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nomNotas: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nomDias: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fecFinal: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  indEstado: string;
}
