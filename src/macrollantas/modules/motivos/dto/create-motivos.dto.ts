import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateMotivosDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nombre: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nicho: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  orden: number;
}
