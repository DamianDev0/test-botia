import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateTraMatriculasDetDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idMatricula: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  estado: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sku: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codigo: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  cantidad: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'SKU PROV': string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  orden: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  referencia: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ubicacion: string;
}
