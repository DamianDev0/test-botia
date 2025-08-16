import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateUsuariosDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nombre: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  correo: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  edad: number;
}
