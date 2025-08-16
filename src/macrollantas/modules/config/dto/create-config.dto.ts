import { IsString, IsBoolean, IsNumber, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateConfigDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  colorFondoSecundario: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  id: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  colorLabel: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  colorFondoFormulario: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  radioInferior: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  rutaLogo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  colorBotonTexto: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  colorAppBar: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  colorContrasteFondoSecundario: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  colorContrasteFondoFormulario: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  usaGradiente: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  estado: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  colorMenuDrawer: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  colorPrimario: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  colorFondo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  colorGradientePrimario: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  radioSuperior: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  colorGradienteSecundario: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  rutaLogoFondo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  idEmpresa: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  NICHO: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  colorContrasteFondo: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  colorError: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  colorBoton: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  orientacionGradiente: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  colorContrastePrimario: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nombreEmpresa: string;
}
