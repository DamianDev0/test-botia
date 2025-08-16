import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateTablasDetDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID_TABLAS: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  VALOR: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NOMBRE: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CAMPO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  COMPONENTE: string;
}
