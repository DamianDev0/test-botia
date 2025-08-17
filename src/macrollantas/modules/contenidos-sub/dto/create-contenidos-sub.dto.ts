import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateContenidosSubDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numSubcapitulo: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  indEstado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nomTitulo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idContenidoCap: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numClases: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numDuracion: number;
}
