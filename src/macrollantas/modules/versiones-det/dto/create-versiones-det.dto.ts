import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateVersionesDetDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  VIDEO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  FOTO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'ID VERSION': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CARACTERISTICA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  AUTOR: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ORDEN: number;
}
