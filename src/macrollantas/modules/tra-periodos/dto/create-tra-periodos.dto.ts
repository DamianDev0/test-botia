import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateTraPeriodosDto {
  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  'FECHA FINAL': Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  'FECHA INICIAL': Date;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  AÑO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  mes: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  periodo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;
}
