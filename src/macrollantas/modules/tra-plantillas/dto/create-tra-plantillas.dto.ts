import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateTraPlantillasDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  REFERENCIA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TIPO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  TIEMPO: number;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  'FECHA CREACION': Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CATEGORIA: string;

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
  MARCA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CONCEPTO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  PARTE: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NUMERO: string;
}
