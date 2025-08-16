import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString, IsArray } from "class-validator";

export class CreateCompanyDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  whatsappId?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  phoneId?: string;

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
  phoneCode?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  niche?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  country?: string;

  /*@IsEnum(DocumentTypes)
  @ApiProperty({ enum: DocumentTypes })
  document: DocumentTypes;

  @IsString()
  @ApiProperty()
  documentNumber: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  botName: string;

  @IsString()
  @ApiProperty()
  systemMessage: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  description?: string;*/
}
