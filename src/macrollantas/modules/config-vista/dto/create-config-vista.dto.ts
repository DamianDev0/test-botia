import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateConfigVistaDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ancho: number;

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
  container: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  radius: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  componente: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipo: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  visible: boolean;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'BORDER SIZE': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  alto: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  orden: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'BORDER COLOR': string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  border: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  documento: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  orientacion: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  color: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'TIPO APP': string;
}
