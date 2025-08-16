import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeChannelsService } from './type-channels.service';
import { CreateTypeChannelDto } from './dto/create-type-channel.dto';
import { UpdateTypeChannelDto } from './dto/update-type-channel.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Roles } from 'src/users/schemas/user.schema';
import { ApiOperation } from '@nestjs/swagger';

@Controller('type-channels')
export class TypeChannelsController {
  constructor(private readonly typeChannelsService: TypeChannelsService) {}

  @Auth(/*Roles.ADMIN*/)
  @ApiOperation({ summary: 'Create type channel' })
  @Post()
  create(@Body() dto: CreateTypeChannelDto) {
    return this.typeChannelsService.create(dto);
  }

  @Auth(/*Roles.ADMIN, Roles.SUPERADMIN*/)
  @ApiOperation({ summary: 'Get all type channels by id company' })
  @Get(':companyId')
  findAll(@Param('companyId') companyId: string) {
    return this.typeChannelsService.findAll(companyId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeChannelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeChannelDto: UpdateTypeChannelDto) {
    return this.typeChannelsService.update(+id, updateTypeChannelDto);
  }
}
