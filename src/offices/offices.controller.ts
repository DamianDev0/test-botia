import { Controller, Get, Post, Body, Patch, Param, Query, Headers } from '@nestjs/common';
import { OfficesService } from './offices.service';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/update-office.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ApiOperation } from '@nestjs/swagger';
import { UpdateStatusDto } from 'src/commons/dto/update-status.dto';

@Controller('offices')
export class OfficesController {
  constructor(private readonly officesService: OfficesService) {}

  @Auth(/*Roles.ADMIN*/)
  @ApiOperation({ summary: 'Create office' })
  @Post()
  create(@Body() dto: CreateOfficeDto) {
    return this.officesService.create(dto);
  }

  @ApiOperation({ summary: 'Get office by name' })
  @Get('name')
  findOneByName(
    @Headers('key') key: string, 
    @Query('name') name: string, 
    @Query('companyId') companyId: string
  ) {
    return this.officesService.findOneByName(key, name, companyId);
  }

  /*@Auth(Roles.ADMIN, Roles.SUPERADMIN)*/
  @ApiOperation({ summary: 'Get office by id' })
  @Get(':id')
  findOne(@Headers('key') key: string, @Param('id') id: string) {
    return this.officesService.findOne(key, id);
  }

  @Auth(/*Roles.ADMIN, Roles.SUPERADMIN*/)
  @ApiOperation({ summary: 'Get all offices by company id' })
  @Get()
  findAll(@Query('companyId') companyId: string) {
    return this.officesService.findAll(companyId);
  }

  @Auth(/*Roles.ADMIN*/)
  @ApiOperation({ summary: 'Update office data' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOfficeDto: UpdateOfficeDto) {
    return this.officesService.update(id, updateOfficeDto);
  }

  @Auth(/*Roles.ADMIN*/)
  @ApiOperation({ summary: 'Update office status' })
  @Patch('status/:id')
  updateStatus(@Param('id') id: string, @Body() dto: UpdateStatusDto) {
    return this.officesService.updateStatus(id, dto.status);
  }
}
