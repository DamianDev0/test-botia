import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateConfigUbicacionDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ORDEN: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  ESTADO: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CAMPO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  LONGITUD: number;
}
