import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateSysRolCampoDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nicho: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tabla: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  rol: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  permiso: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  campo: string;
}
