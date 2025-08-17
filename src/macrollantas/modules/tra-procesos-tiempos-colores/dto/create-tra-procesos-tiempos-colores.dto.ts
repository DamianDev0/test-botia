import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateTraProcesosTiemposColoresDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipoNicho: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codEmpresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codColor: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  valPorcentaje1: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipo: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numOrden: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codRgb: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  valPorcentaje2: number;
}
