import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateClientesDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nicho: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  email: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  telefono: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  fecha: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  placa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'NIT ASOCIADO': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nombre: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sexo: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  nit: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  qr: string;
}
