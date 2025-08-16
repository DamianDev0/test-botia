import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateSeeFormulasDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  FACTOR: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID_VARIABLE2: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  FORMULA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  OPERADOR: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID_VARIABLE1: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  VARIABLE: string;
}
