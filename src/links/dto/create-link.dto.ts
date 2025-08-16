import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Roles } from 'src/users/schemas/user.schema';

export class CreateLinkDto {
  @IsString()
  @ApiProperty()
  companyId: string;

  @IsString()
  @ApiProperty()
  officeId: string;

  @IsString()
  @ApiProperty()
  url: string;

  @IsString()
  @ApiProperty()
  linkType: string;

  @IsEnum(Roles)
  @ApiProperty()
  role: Roles;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  question?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  answer?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  wordId?: string;
}
