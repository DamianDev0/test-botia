import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateConfigCapturaDetDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRESA?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ESTADO?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  ORDEN?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  PASSWORD?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ name: 'TIPO ' })
  TIPO?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  MAYUSCULA?: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NOMBRE?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  VER?: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ name: 'VALOR INICIAL' })
  VALOR_INICIAL?: string;
}
