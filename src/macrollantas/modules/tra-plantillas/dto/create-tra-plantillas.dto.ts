import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateTraPlantillasDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  referencia: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  tiempo: number;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  'FECHA CREACION': Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  categoria: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'TIPO MOTOR': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'TIPO VEHICULO': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  marca: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  concepto: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  parte: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  numero: string;
}
