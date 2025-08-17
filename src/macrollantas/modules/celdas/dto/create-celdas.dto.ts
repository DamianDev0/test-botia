import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateCeldasDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  celda: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  placa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'EMPRESA ': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;
}
