import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateSeeVariablesDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  descripcion: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  area: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'UNIDAD MEDIDA': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  variable: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  url: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  orden: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'TIPO INGRESO': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;
}
