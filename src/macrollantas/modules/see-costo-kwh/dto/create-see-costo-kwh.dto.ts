import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateSeeCostoKwhDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  periodo: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  costo: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;
}
