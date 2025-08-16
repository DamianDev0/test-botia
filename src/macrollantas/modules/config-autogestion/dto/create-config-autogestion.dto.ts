import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateConfigAutogestionDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NICHO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUBTITULO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TITULO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  VISIBLE: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  IMAGEN: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ORDEN: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ALINEACION: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;
}
