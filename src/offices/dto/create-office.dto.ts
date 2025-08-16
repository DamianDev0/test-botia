import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsString, IsOptional, IsArray } from "class-validator";

export class CreateOfficeDto {
  @IsString()
  @ApiProperty()
  companyId: string;

  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  city?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  department?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  address?: string;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  geolocation?: string[];

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  phoneCode?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  country?: string;
}
