import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class LoginUserDto {
  @IsString()
  @ApiProperty()
  OAuthToken: string;
}
