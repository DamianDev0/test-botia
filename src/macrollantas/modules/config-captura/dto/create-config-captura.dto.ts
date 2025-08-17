import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsBoolean } from 'class-validator';

export class CreateConfigCapturaDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  documento: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  key: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  componente: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  manejaKey: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;
}
