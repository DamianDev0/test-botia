import { IsNotEmpty } from "class-validator";
import { IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateSignatureDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  planTypeId: string;
}
