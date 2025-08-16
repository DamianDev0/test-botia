import { IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateKeysDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  CLAVE: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  USUARIO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  FORMULARIO: string;
}
