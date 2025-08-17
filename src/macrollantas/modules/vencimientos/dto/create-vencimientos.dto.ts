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
  tipo: string;

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
  sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'DIA INICIAL': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nicho: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  placa: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'KMS INICIAL': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  servicio: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  estado: boolean;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  'FECHA INICIAL': Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  usabilidad: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'ID CLIENTE': string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'KMS FINAL': number;
}
