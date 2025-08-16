import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSysRoleDto {
  @IsString()
  @ApiProperty()
  firestoreId: string;

  @IsString()
  @ApiProperty()
  companyId: string;

  @IsString()
  @ApiProperty()
  role: string;

  @IsString()
  @ApiProperty()
  officeId: string;
}
