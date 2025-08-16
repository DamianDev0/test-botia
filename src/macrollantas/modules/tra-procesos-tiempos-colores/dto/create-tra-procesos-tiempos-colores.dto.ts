import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateTraProcesosTiemposColoresDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TIPO_NICHO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_color: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  val_porcentaje1: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipo: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  num_orden: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_rgb: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  val_porcentaje2: number;
}
