import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateTraReferenciasDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  REFERENCIA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  MARCA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ORDEN: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TIPO: string;
}
