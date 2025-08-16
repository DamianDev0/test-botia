import { IsNumber, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateConceptosConDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  TOPE2?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  PORCENTAJE?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  'CONCEPTO CON'?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  CUENTA?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  SUCURSAL?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  ESTADO?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  EMPRESA?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  'TIPO DOCUMENTO'?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  TIPOV?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  id?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  ORDEN?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  TOPE1?: number;
}
