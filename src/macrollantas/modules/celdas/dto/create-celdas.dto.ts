import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateCeldasDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CELDA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  PLACA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TIPO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'EMPRESA ': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;
}
