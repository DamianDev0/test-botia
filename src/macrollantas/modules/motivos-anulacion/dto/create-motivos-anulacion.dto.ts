import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateMotivosAnulacionDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codEmpresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  motivo: string;
}
