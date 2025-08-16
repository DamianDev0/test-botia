import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateTraProcesosDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_proceso: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  ind_ver: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nom_proceso: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_empresa: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_orden: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TIPO: string;
}
