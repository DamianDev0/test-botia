import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateConfigCitasDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  frecuencia: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  horaFinal: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fechaInicial: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fechaFinal: Date;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  citas: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  horaInicial: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;
}
