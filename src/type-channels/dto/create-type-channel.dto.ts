import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { IsOptional, IsString } from "class-validator"

export class CreateTypeChannelDto {
  @IsString()
  @ApiProperty()
  companyId: string;

  @IsString()
  @ApiProperty()
  officeId: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  icon?: string;

  @IsString()
  @ApiProperty()
  typeChannel: string;
}
