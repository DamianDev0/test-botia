import { Controller, Get, Post, Body, Patch, Param, Query, Headers } from '@nestjs/common';
import { LinksService } from './links.service';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { UpdateStatusDto } from 'src/commons/dto/update-status.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ApiOperation } from '@nestjs/swagger';
import { CreateLinkParamDto } from './dto/create-link-param.dto';
import { UpdateLinkParamDto } from './dto/update-link-param.dto';
import { CreateLinkWordDto } from './dto/create-link.-word.dto';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Auth(/*Roles.ADMIN*/)
  @ApiOperation({ summary: 'Create link' })
  @Post()
  create(@Body() createLinkDto: CreateLinkDto) {
    return this.linksService.create(createLinkDto);
  }

  // @Auth(/*Roles.ADMIN*/)
  @ApiOperation({ summary: 'Create link word' })
  @Post('words')
  createLinkWord(@Body() createLinkWordDto: CreateLinkWordDto) {
    return this.linksService.createLinkWord(createLinkWordDto);
  }

  @Auth(/*Roles.ADMIN*/)
  @ApiOperation({ summary: 'Create link param' })
  @Post('params')
  createLinkParam(@Body() createLinkParamDto: CreateLinkParamDto) {
    return this.linksService.createLinkParam(createLinkParamDto);
  }

  // TODO: Agregar enum para tipo de archivo
  // TODO: Filtrar por tipo?
  @ApiOperation({ summary: 'Get all links' })
  @Get()
  findAll(
    @Headers('key') key: string,
    @Query('companyId') companyId: string
  ) {
    return this.linksService.findAll(key, companyId);
  }

  @ApiOperation({ summary: 'Get all link params' })
  @Get('params')
  findLinkParams(
    @Headers('key') key: string,
    @Query('linkId') linkId: string
  ) {
    return this.linksService.findLinkParams(key, linkId);
  }

  @ApiOperation({ summary: 'Get link word by name' })
  @Get('words')
  findLinkWord(
    @Headers('key') key: string,
    @Query('word') word: string,
    @Query('companyId') companyId: string
  ) {
    return this.linksService.findLinkWord(key, word, companyId);
  }

  @ApiOperation({ summary: 'Get link by id' })
  @Get(':id')
  findOne(
    @Headers('key') key: string,
    @Param('id') id: string
  ) {
    return this.linksService.findOne(key, id);
  }

  @ApiOperation({ summary: 'Get link param by id' })
  @Get('params/:id')
  findLinkParam(
    @Headers('key') key: string,
    @Param('id') id: string
  ) {
    return this.linksService.findLinkParam(key, id);
  }

  @Auth(/*Roles.ADMIN*/)
  @ApiOperation({ summary: 'Update link' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLinkDto: UpdateLinkDto
  ) {
    return this.linksService.update(id, updateLinkDto);
  }

  @Auth(/*Roles.ADMIN*/)
  @ApiOperation({ summary: 'Update link param' })
  @Patch('params/:id')
  updateLinkParam(
    @Param('id') id: string,
    @Body() updateLinkParamDto: UpdateLinkParamDto
  ) {
    return this.linksService.updateLinkParam(id, updateLinkParamDto);
  }

  @Auth(/*Roles.ADMIN*/)
  @ApiOperation({ summary: 'Update link status' })
  @Patch('status/:id')
  updateStatus(@Param('id') id: string, @Body() dto: UpdateStatusDto) {
    return this.linksService.updateStatus(id, dto.status);
  }

  @Auth(/*Roles.ADMIN*/)
  @ApiOperation({ summary: 'Update link param status' })
  @Patch('params/status/:id')
  updateLinkParamStatus(@Param('id') id: string, @Body() dto: UpdateStatusDto) {
    return this.linksService.updateLinkParamStatus(id, dto.status);
  }
}