import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateConfigVistaDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ANCHO: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'NUMERO FILAS': number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'NUMERO COLUMNAS': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CONTAINER: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  RADIUS: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  COMPONENTE: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TIPO: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  VISIBLE: boolean;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'BORDER SIZE': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ALTO: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ORDEN: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'BORDER COLOR': string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  BORDER: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  DOCUMENTO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ORIENTACION: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  COLOR: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'TIPO APP': string;
}
