import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsBoolean } from 'class-validator';

export class CreateConfigCabezaDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  documento: string | null;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  key: string | null;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string | null;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  componente: string | null;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  app: string | null;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  manejaKey: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string | null;
}
