import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateTemporadasDto {
  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  'FECHA FINAL': Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  'FECHA INICIAL': Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TEMPORADA: string;
}
