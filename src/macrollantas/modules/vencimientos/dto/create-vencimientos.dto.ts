import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  IsNumber,
  IsDateString,
  IsBoolean,
} from 'class-validator';

export class CreateVencimientosDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TIPO: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  'FECHA FINAL': Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'DIA FINAL': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'DIA INICIAL': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NICHO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  PLACA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'KMS INICIAL': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SERVICIO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  ESTADO: boolean;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  'FECHA INICIAL': Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  USABILIDAD: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'ID CLIENTE': string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'KMS FINAL': number;
}
