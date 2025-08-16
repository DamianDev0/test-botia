import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateDepEquiposDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID_EMPRESA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  NUMERO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TECNICO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID_SUCURSAL: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  DELEGADO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  LOGO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID_NICHO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NOMBRE: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID_EQUIPO: string;
}
