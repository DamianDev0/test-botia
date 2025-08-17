import { IsString, IsBoolean, IsNumber, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateConfigBdDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  usuario: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nombreBd: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  estado: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ip: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idServicios: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  contrasena: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  puerto: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  esquema: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  baseDeDatos: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  protocolo: string;
}
