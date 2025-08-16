import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsBoolean } from 'class-validator';

export class CreateConfigCapturaDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  DOCUMENTO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  KEY: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  COMPONENTE: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  MANEJA_KEY: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;
}
