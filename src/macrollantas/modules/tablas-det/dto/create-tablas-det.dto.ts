import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateTablasDetDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idTablas: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  valor: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nombre: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  campo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  componente: string;
}
