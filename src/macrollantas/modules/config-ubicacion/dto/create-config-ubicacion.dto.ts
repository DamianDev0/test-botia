import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateConfigUbicacionDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  orden: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  estado: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  campo: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  longitud: number;
}
