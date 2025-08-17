import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateContenidosProDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idContenidoSub: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idEmpresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idContenidoRec: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idSucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idUsuario: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numAvance: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numFinal: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numInicial: number;
}
