import { IsNumber, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFormaPagoDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  PLAZO?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  SUCURSAL?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  NOMBRE?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  NICHO?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  EMPRESA?: string;
}
