import { IsString, IsBoolean, IsNumber, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Roles } from 'src/users/schemas/user.schema';

export class CreateSysSubmenuDto {
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

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional()
  status?: boolean;

  @IsString()
  @ApiProperty()
  menu: string;

  @IsString()
  @ApiProperty()
  submenu: string;

  @IsNumber()
  @ApiProperty()
  orderM: number;

  @IsNumber()
  @ApiProperty()
  orderS: number;

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
