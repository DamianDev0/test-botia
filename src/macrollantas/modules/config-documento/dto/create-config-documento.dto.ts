import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateConfigDocumentoDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  fila: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  vista: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  documento: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  orden: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  columna: number;
}
