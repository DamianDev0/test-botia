import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateTablasDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID_EMPRESA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CAMPO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESQUEMA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TABLA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID_NICHO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  BADE_DATOS: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID_SUCURSAL: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TIPO: string;
}
