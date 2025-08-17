import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateConfigKardexDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  orden: number;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  multiseleccion: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  titulo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  ver: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  descripcion: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'VALOR POR DEFECTO': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tabla: string;
}
