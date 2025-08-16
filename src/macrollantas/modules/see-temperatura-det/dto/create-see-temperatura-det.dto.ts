import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateSeeTemperaturaDetDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  HORA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  NUMERO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID_TEMPERATURA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TIPO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  TEMPERATURA: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  RESPONSABLE: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;
}
