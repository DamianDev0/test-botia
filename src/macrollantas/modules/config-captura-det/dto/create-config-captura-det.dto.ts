import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateConfigCapturaDetDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  orden?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  password?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ name: 'TIPO ' })
  tipo?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  mayuscula?: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nombre?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  ver?: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ name: 'VALOR INICIAL' })
  valorInicial?: string;
}
