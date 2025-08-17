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
  empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  submenu: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  vista: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  rol: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  'ORDEN-M': number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  menu: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  app: string;
}
