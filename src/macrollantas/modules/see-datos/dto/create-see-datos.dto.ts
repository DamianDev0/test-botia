import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateSeeDatosDto {
  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fecPeriodos: Date;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fecIndicadores: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fecVariables: Date;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  dispositivo: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  variable: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fecDatos: Date;
}
