import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateConfigDocumentoDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  FILA: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  VISTA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  DOCUMENTO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ORDEN: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  COLUMNA: number;
}
