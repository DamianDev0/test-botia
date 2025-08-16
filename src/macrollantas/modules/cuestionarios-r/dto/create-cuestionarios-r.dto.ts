import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  IsNumber,
  IsDateString,
  IsBoolean,
} from 'class-validator';

export class CreateCuestionariosRDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_pregunta: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  resultado: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_usuario: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  me_gusta: boolean;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  calificación: number;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fecha_respuesta: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  intento: number;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  denunciar: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  notas: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  url_foto: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  respuesta: string;
}
