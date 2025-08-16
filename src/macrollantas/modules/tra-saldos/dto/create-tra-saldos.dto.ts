import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateTraSaldosDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  VAL_COSTO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TIPO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  CAN_SALDO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  CAN_ENTRADAS: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  REFERENCIA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SKU: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  VAL_PRECIO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  PERIODO: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  CAN_SALIDAS: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  FECHA: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  VAL_SALIDAS: number;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  ESTADO: boolean;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  VAL_INICIAL: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  VAL_ENTRADAS: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  CAN_INICIAL: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TIPOV: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  VAL_SALDO: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;
}
