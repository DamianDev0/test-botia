import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
  @IsString()
  @ApiProperty()
  firebaseId: string;

  @IsString()
  @ApiProperty()
  companyId: string;

  @IsString()
  @ApiProperty()
  officeId: string;

  @IsString()
  @ApiProperty()
  sku: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  description: string;

  @IsString()
  @ApiProperty()
  reference: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  stock: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  price: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  model1: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  model2: string;  
}
