import { Controller, Get, Query, Headers, Param, Patch, Body, Post } from '@nestjs/common';
import { HelpService } from './help.service';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';
import { UpdateHelpDetDto } from './dto/update-help-det.dto';
import { UpdateStatusDto } from 'src/commons/dto/update-status.dto';
import { CreateHelpDto } from './dto/create-help.dto';
import { UpdateHelpDto } from './dto/update-help.dto';
import { CreateHelpDetDto } from './dto/create-help-det.dto';

@Controller()
export class HelpController {
  constructor(private readonly helpService: HelpService) {}

  @ApiOperation({ summary: 'Create help' })
  @Post('help')
  create(
    @Headers('key') key: string,
    @Body() dto: CreateHelpDto
  ) {
    return this.helpService.createHelp(key, dto);
  }

  @ApiQuery({ name: 'admin', required: false })
  @ApiOperation({ summary: 'Get all help by company id' })
  @Get('help')
  findAllHelps(
    @Headers('key') key: string,
    @Query('companyId') companyId: string,
    @Query('admin') admin: boolean = false
  ) {
    return this.helpService.findAllHelps(key, companyId, admin);
  }

  @ApiOperation({ summary: 'Get help by id' })
  @Get('help/id')
  findOneHelp(
    @Headers('key') key: string,
    @Query('id') id: string
  ) {
    return this.helpService.findOneHelp(key, id);
  }

  @ApiOperation({ summary: 'Update help by id' })
  @Patch('help/:id')
  updateHelp(
    @Headers('key') key: string,
    @Param('id') id: string,
    @Body() dto: UpdateHelpDto
  ) {
    return this.helpService.updateHelp(key, id, dto);
  }

  @ApiOperation({ summary: 'Update help status by id' })
  @Patch('help/:id/status')
  updateHelpStatus(
    @Headers('key') key: string,
    @Param('id') id: string,
    @Body() dto: UpdateStatusDto
  ) {
    return this.helpService.updateHelpStatus(key, id, dto.status);
  }

  @ApiOperation({ summary: 'Create help detail' })
  @Post('help/det')
  createHelpDet(
    @Headers('key') key: string,
    @Body() dto: CreateHelpDetDto
  ) {
    return this.helpService.createHelpDet(key, dto);
  }

  @ApiOperation({ summary: 'Get all help details by help id' })
  @Get('help/det')
  findAllHelpsDet(
    @Headers('key') key: string,
    @Query('helpId') helpId: string
  ) {
    return this.helpService.findAllHelpsDet(key, helpId);
  }

  @ApiOperation({ summary: 'Get help detail by id' })
  @Get('help/det/id')
  findOneHelpDet(
    @Headers('key') key: string,
    @Query('id') id: string
  ) {
    return this.helpService.findOneHelpDet(key, id);
  }

  @ApiOperation({ summary: 'Update help detail by id' })
  @Patch('help/det/:id')
  updateHelpDet(
    @Headers('key') key: string,
    @Param('id') id: string,
    @Body() dto: UpdateHelpDetDto
  ) {
    return this.helpService.updateHelpDet(key, id, dto);
  }

  @ApiOperation({ summary: 'Update help detail status by id' })
  @Patch('help/det/:id/status')
  updateHelpDetStatus(
    @Headers('key') key: string,
    @Param('id') id: string,
    @Body() dto: UpdateStatusDto
  ) {
    return this.helpService.updateHelpDetStatus(key, id, dto.status);
  }
}
