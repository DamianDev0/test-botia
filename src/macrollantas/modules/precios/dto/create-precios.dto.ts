import { IsNumber, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePreciosDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  servicio?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  id?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  rango2?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  empresa?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  medida1?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  medida2?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  estado?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  sucursal?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  rango1?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  equivale1?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  precio?: number;
}
