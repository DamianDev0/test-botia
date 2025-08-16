import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsUrl, IsBoolean } from 'class-validator';

export class CreateHelpDto {
  @IsString()
  @ApiProperty()
  companyId: string;

  @IsString()
  @ApiProperty()
  officeId: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  @ApiPropertyOptional()
  title: string;

  @IsString()
  @ApiProperty()
  help: string;

  @IsNumber()
  @ApiProperty()
  order: number;

  @IsUrl()
  @IsOptional()
  @ApiProperty()
  fileUrl?: string;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional()
  admin: boolean;
}
