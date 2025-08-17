import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateSusuariosDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  rol: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  email: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  vendedor: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  usuario: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codigo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  accesoweb: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  descripcion: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  vencimiento: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  claveAcce: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  group: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  rutaFoto: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  activo: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;
}
