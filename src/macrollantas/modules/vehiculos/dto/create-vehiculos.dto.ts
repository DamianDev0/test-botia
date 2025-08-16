import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateVehiculosDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  telefonos: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NOMBRE1: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NOMBRE2: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nit: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  placa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  email: string;
}
