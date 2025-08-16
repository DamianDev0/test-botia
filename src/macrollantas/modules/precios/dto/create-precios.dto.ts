import { IsNumber, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePreciosDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  SERVICIO?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  ID?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  RANGO2?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  EMPRESA?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  MEDIDA1?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  MEDIDA2?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  ESTADO?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  SUCURSAL?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  RANGO1?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  EQUIVALE1?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  PRECIO?: number;
}
