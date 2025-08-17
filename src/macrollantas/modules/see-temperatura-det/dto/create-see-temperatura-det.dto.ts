import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateSeeTemperaturaDetDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  hora: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numero: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idTemperatura: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  temperatura: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  responsable: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;
}
