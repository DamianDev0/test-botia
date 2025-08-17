import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateTraReferenciasProveedorDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  refProveedor: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  orden: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;
}
