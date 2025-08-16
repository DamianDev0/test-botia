import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateSeeVariablesDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  DESCRIPCION: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  AREA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'UNIDAD MEDIDA': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  VARIABLE: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  URL: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ORDEN: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'TIPO INGRESO': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;
}
