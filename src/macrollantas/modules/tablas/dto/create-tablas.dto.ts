import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateTablasDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idEmpresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  campo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  esquema: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tabla: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idNicho: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  badeDatos: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idSucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipo: string;
}
