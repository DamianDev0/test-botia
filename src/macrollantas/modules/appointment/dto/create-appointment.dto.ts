import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAppointmentDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  fechaString: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  rombo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  sucursal: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fecha: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idMovimiento: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  hora: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  empresa: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  orden: number;
}
