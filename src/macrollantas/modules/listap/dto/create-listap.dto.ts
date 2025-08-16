import { IsNumber, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateListapDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  SUCURSAL?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  PORCENTAJE_FIG?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  PORCENTAJE_RC?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  SKU?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  'PRECIO RC'?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  'PRECIO FIGURA'?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  ESTADO?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  PORCENTAJE_VEN?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  id?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  UNIDAD_MEDIDA?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  MEDIDA?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  PORCENTAJE_BAS?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  CATEGORIA?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  CALIBRE?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  FACTOR?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  EMPRESA?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  'PRECIO VENTA'?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  'PRECIO BASE'?: number;
}
