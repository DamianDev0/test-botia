import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateSeeVariablesDetDto {
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
  sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  frecuencia: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  valor: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  variable: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  periodo: string;
}
