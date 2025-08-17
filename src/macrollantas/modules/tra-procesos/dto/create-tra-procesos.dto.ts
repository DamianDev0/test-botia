import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateTraProcesosDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codProceso: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  indVer: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nomProceso: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codEmpresa: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  numOrden: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tipo: string;
}
