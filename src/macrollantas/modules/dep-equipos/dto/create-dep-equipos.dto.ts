import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateDepEquiposDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idEmpresa: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numero: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tecnico: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idSucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  delegado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  logo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idNicho: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nombre: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idEquipo: string;
}
