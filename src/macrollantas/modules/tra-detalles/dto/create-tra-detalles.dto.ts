import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateTraDetallesDto {
  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fecProceso: Date;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numTotal: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codSucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipRombo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codSubgrupo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  numNit: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nomCodigo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  fechaFinal: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numTiempoProceso: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  canPedida: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numTiempoTotal: number;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fechaInicial: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codPlaca: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codGrupo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codEmail: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codEvento: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codTecnico: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numItem: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codUbicacionBodega: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nomCliente: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  numRombo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codProceso: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codUbicacion: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  indEstado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codCodigo: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  canDespachada: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codEmpresa: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  canExistencia: number;
}
