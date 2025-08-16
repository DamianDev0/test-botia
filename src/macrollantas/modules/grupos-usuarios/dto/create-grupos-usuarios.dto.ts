import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateGruposUsuariosDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  grupo: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  INVENTARIOS: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  administrador: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  descripcion: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  TODASBODEGAS: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  PERMISOCREDITO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nombre: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ObligarFechaCalendario: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  perfil: number;
}
