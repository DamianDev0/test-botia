import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateContenidosDetDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codEmpresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  indTipo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idContenido: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codSucursal: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numOrden: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nomCaracteristica: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  indEstado: string;
}
