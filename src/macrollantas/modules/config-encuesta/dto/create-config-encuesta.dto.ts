import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateConfigEncuestaDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  texto: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fechaInicial: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fechaFinal: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  imagen: string;
}
