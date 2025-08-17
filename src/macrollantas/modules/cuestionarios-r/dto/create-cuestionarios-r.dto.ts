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
  idSucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idEmpresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idPregunta: string;

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
  idUsuario: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  meGusta: boolean;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  calificación: number;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fechaRespuesta: Date;

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
  urlFoto: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  respuesta: string;
}
