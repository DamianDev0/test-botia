import { IsNumber, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateConceptosConDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  tope2?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  porcentaje?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  'CONCEPTO CON'?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  cuenta?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  sucursal?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  estado?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  empresa?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  'TIPO DOCUMENTO'?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  tipov?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  id?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  orden?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  tope1?: number;
}
