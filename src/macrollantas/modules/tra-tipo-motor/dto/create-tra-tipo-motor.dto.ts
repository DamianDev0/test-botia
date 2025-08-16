import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateTraTipoMotorDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  MOTOR: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  MARCA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  EMPRFESA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  REFERENCIA: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  TIPO: string;
}
