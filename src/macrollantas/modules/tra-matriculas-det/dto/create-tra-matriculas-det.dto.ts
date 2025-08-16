import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateTraMatriculasDetDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID_MATRICULA: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  ESTADO: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SKU: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CODIGO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  CANTIDAD: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'SKU PROV': string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ORDEN: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  REFERENCIA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  UBICACION: string;
}
