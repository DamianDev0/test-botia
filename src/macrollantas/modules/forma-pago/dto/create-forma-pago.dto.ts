import { IsNumber, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFormaPagoDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  plazo?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  sucursal?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  nombre?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  nicho?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  empresa?: string;
}
