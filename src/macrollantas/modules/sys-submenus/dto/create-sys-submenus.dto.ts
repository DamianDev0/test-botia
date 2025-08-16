import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateSysSubmenusDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'ORDEN-S': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  item: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUBMENU: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  VISTA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ROL: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SUCURSAL: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'ORDEN-M': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ID: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  MENU: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  APP: string;
}
