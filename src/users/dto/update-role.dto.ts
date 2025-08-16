import { IsEnum } from 'class-validator';
import { Roles } from '../schemas/user.schema';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateRoleDto {
  @IsEnum(Roles)
  @ApiProperty()
  role: Roles;
}
