import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateContenidosUsrDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  indEstado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fecFecha: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idContenido: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idUsuario: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codSucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  codEmpresa: string;
}
