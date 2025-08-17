import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateVersionesDetDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  video: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  foto: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'ID VERSION': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  caracteristica: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  autor: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  orden: number;
}
