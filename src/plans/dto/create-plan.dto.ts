import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsDateString, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePlanDto {
  @IsDateString()
  @IsOptional()
  @ApiPropertyOptional()
  startDate?: Date;

  @IsDateString()
  @IsOptional()
  @ApiPropertyOptional()
  endDate?: Date;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  order?: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  companyId?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  officeId?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  planTypeId?: string;
}
