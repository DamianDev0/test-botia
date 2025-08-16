import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsBoolean } from 'class-validator';

export class CreateConfigCabezaDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  DOCUMENTO: string | null;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  KEY: string | null;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string | null;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  COMPONENTE: string | null;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  APP: string | null;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  MANEJA_KEY: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID: string | null;
}
