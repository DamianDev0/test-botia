import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateConfigQrDetDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  referencia: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  qr: string;
}
