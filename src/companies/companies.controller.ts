import { Controller, Get, Post, Body, Patch, Param, Request, Headers } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { ApiOperation } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Roles } from 'src/users/schemas/user.schema';
import { UpdateStatusDto } from 'src/commons/dto/update-status.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Auth()
  @ApiOperation({ summary: 'Create company' })
  @Post()
  create(@Body() dto: CreateCompanyDto, @Request() req: any) {
    return this.companiesService.create(dto, req.user._id);
    // return this.companiesService.create(dto, '679a906b078332fe7e0d2651');
  }

  @Auth(/*Roles.SUPERADMIN*/)
  @ApiOperation({ summary: 'Get all companies' })
  @Get()
  findAll() {
    return this.companiesService.findAll();
  }

  @ApiOperation({ summary: 'Get company by id' })
  @Get(':id')
  findOne(@Headers('key') key: string, @Param('id') id: string,) {
    return this.companiesService.findOne(key, id);
  }

  @Auth()
  @ApiOperation({ summary: 'Update company data' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCompanyDto) {
    return this.companiesService.update(id, dto);
  }

  @Auth(/*Roles.SUPERADMIN*/)
  @ApiOperation({ summary: 'Update company status' })
  @Patch('status/:id')
  updateStatus(@Param('id') id: string, @Body() dto: UpdateStatusDto) {
    return this.companiesService.updateStatus(id, dto.status);
  }
}
