import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSysAppDto {
  @IsString()
  @ApiProperty()
  firestoreId: string;

  @IsString()
  @ApiProperty()
  app: string;

  @IsString()
  @ApiProperty()
  companyId: string;

  @IsString()
  @ApiProperty()
  officeId: string;

  @IsString()
  @ApiProperty()
  role: string;
}
