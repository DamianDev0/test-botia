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
  estado: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  'FECHA INICIAL': Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  temporada: string;
}
