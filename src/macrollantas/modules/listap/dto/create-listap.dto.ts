import { IsNumber, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateListapDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  sucursal?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  porcentajeFig?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  porcentajeRc?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  sku?: string;

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
  estado?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  porcentajeVen?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  id?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  unidadMedida?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  medida?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  porcentajeBas?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  categoria?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  calibre?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  factor?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  empresa?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  'PRECIO VENTA'?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  'PRECIO BASE'?: number;
}
