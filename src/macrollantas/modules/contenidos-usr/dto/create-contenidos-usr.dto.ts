import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateContenidosUsrDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  ind_estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  fec_fecha: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_contenido: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id_usuario: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_sucursal: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  cod_empresa: string;
}
