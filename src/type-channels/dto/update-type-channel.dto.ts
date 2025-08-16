import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateTypeChannelDto } from './create-type-channel.dto';
import { IsOptional } from 'class-validator';
import { IsString } from 'class-validator';

export class UpdateTypeChannelDto extends PartialType(CreateTypeChannelDto) {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  icon?: string;
}
