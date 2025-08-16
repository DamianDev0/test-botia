import { IsString, IsBoolean, IsNumber, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateConfigBdDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  USUARIO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'NOMBRE BD': string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  ESTADO: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  IP: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'ID SERVICIOS': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CONTRASEÑA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  PUERTO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESQUEMA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  'BASE DE DATOS': string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  PROTOCOLO: string;
}
