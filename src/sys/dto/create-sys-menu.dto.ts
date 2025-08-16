import { ApiProperty } from '@nestjs/swagger';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateSysMenuDto {
  @IsString()
  @ApiProperty()
  firestoreId: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  alignment: string;

  @IsString()
  @ApiProperty()
  app: string;

  @IsString()
  @ApiProperty()
  companyId: string;

  @IsString()
  @ApiProperty()
  menu: string;

  @IsNumber()
  @ApiProperty()
  order: number;

  @IsString()
  @ApiProperty()
  role: string;

  @IsString()
  @ApiProperty()
  officeId: string;

  @IsString()
  @ApiPropertyOptional()
  view?: string;
}
