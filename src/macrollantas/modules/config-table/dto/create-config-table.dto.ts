import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateConfigTableDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  database: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  tabla: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;
}
