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
  EMAIL: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  VENDEDOR: string;

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
  clave_acce: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  group: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ruta_foto: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  activo: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;
}
