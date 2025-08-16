import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateClientesDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NICHO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMAIL: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TELEFONO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  FECHA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  PLACA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'NIT ASOCIADO': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NOMBRE: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SEXO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  NIT: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TIPO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  QR: string;
}
