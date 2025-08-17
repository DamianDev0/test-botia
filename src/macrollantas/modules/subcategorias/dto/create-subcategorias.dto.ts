import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateSubcategoriasDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  orden: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  categoria: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  subcategoria: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  icono: string;
}
