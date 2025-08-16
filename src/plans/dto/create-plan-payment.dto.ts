import { IsString, IsNumber, IsOptional, IsDateString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePlanPaymentDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  companyId?: string;

  @IsDateString()
  @IsOptional()
  @ApiPropertyOptional()
  paymentDate?: Date;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  numInstallment?: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  officeId?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  paymentType?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  planTypeId?: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  amountPaid?: number;
}
