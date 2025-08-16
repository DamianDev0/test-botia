import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateTecnicosDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  INICIALES: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  SERVICIOS: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NOMBRE: string;
}
