import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateTecnicosDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  iniciales: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  servicios: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nombre: string;
}
