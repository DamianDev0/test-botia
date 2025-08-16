import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEnum, IsOptional } from 'class-validator';
import { Roles } from 'src/commons/enums';
import { DocumentTypes } from 'src/users/schemas/user.schema';

export class CreateUserDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  lastName: string;

  @IsString()
  @ApiProperty()
  phone: string;

  @IsEnum(DocumentTypes)
  @ApiProperty({ enum: DocumentTypes })
  document: DocumentTypes;

  @IsString()
  @ApiProperty()
  documentNumber: string;

  @IsEnum(Roles)
  @IsOptional()
  @ApiPropertyOptional({ enum: Roles })
  role: Roles;
}
