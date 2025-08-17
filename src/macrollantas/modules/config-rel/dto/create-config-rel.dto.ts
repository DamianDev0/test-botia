import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateConfigRelDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  indEstado: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  alto: number;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fechaInicial: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  colorFondo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idRecurso: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  sizeFont: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idRelacionado: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fechaFinal: Date;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ancho: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  posicion: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  colorLetra: string;
}
