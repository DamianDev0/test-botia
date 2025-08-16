import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateSeeCostoKwhDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  PERIODO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  COSTO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID: string;
}
