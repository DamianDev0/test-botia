import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateSeeDatosDto {
  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fec_periodos: Date;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fec_indicadores: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fec_variables: Date;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  DISPOSITIVO: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  VARIABLE: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fec_datos: Date;
}
