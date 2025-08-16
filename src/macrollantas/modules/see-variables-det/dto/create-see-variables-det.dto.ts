import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateSeeVariablesDetDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  FRECUENCIA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  VALOR: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  VARIABLE: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  PERIODO: string;
}
