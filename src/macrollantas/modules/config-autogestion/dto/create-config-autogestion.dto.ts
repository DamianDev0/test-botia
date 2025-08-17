import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateConfigAutogestionDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nicho: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  subtitulo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  titulo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  visible: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  imagen: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  orden: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  alineacion: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;
}
