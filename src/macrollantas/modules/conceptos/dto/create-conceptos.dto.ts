import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateConceptosDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  conceptoc: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  documento: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  concepto: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  operacion: number;
}
