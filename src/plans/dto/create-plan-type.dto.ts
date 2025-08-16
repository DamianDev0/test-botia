import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { PlanDuration } from "../schema/plan-type.schema";

export class CreatePlanTypeDto {
  @IsString()
  @ApiPropertyOptional()
  plan: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  description?: string;

  @IsNumber()
  @ApiPropertyOptional()
  price?: number;

  @IsEnum(PlanDuration)
  @IsOptional()
  @ApiPropertyOptional({ enum: PlanDuration })
  duration?: PlanDuration;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  numInstallment?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  valInstallment?: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  companyId?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  officeId?: string;
}
