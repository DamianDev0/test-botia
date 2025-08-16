import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateTraMarcasDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TIPO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ORDEN: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  MARCA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;
}
