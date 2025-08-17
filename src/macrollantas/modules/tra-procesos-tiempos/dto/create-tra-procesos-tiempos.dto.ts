import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateTraProcesosTiemposDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipRecurso: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nomProceso: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codEmpresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codMedida: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codProceso: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  indEstado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codCodigoProveedor: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numTiempo: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipo: string;
}
