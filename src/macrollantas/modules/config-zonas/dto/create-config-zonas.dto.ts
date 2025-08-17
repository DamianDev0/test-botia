import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateConfigZonasDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  columnas: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  panel: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  filas: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  zona: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipo: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  cantidad: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  alineacion: string;
}
