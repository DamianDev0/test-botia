import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateContenidosCapDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numDuracion: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  indEstado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nomTitulo: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numCapitulo: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numClases: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idContenido: string;
}
