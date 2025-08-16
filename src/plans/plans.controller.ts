import { Controller, Get, Post, Body, Patch, Param, Headers } from '@nestjs/common';
import { PlansService } from './plans.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ApiOperation } from '@nestjs/swagger';
import { UpdateStatusDto } from 'src/commons/dto/update-status.dto';
import { CreatePlanPaymentDto } from './dto/create-plan-payment.dto';
import { UpdatePlanPaymentDto } from './dto/update-plan-payment.dto';
import { CreatePlanTypeDto } from './dto/create-plan-type.dto';
import { UpdatePlanTypeDto } from './dto/update-plan-type.dto';

@Controller('plans')
export class PlansController {
  constructor(private readonly plansService: PlansService) {}
  
  
  @Auth(/*Roles.ADMIN*/)
  @ApiOperation({ summary: 'Create plan' })
  @Post()
  createPlan(@Body() dto: CreatePlanDto) {
    return this.plansService.createPlan(dto);
  }

  @ApiOperation({ summary: 'Get all plans' })
  @Get()
  findAllPlans(@Headers('key') key: string) {
    return this.plansService.findAllPlans(key);
  }

  @ApiOperation({ summary: 'Get plan by id' })
  @Get(':id')
  findOnePlan(@Headers('key') key: string, @Param('id') id: string) {
    return this.plansService.findOnePlan(key, id);
  }

  @Auth(/*Roles.ADMIN*/)
  @ApiOperation({ summary: 'Update plan data' })
  @Patch(':id')
  updatePlan(@Param('id') id: string, @Body() updatePlanDto: UpdatePlanDto) {
    return this.plansService.updatePlan(id, updatePlanDto);
  }

  @Auth(/*Roles.ADMIN*/)
  @ApiOperation({ summary: 'Update plan status' })
  @Patch('status/:id')
  updateStatusPlan(@Param('id') id: string, @Body() dto: UpdateStatusDto) {
    return this.plansService.updateStatusPlan(id, dto.status);
  }

  @Auth(/*Roles.ADMIN*/)
  @ApiOperation({ summary: 'Create plan payment' })
  @Post('payments')
  createPlanPayment(@Body() dto: CreatePlanPaymentDto) {
    return this.plansService.createPlanPayment(dto);
  }

  @Auth(/*Roles.ADMIN*/)
  @ApiOperation({ summary: 'Get all plan payments' })
  @Get('payments')
  findAllPlanPayments() {
    return this.plansService.findAllPlanPayments();
  }

  @Auth(/*Roles.ADMIN*/)
  @ApiOperation({ summary: 'Get plan payment by id' })
  @Get('payments/:id')
  findOnePlanPayment(@Param('id') id: string) {
    return this.plansService.findOnePlanPayment(id);
  }

  @Auth(/*Roles.ADMIN*/)
  @ApiOperation({ summary: 'Update plan payment' })
  @Patch('payments/:id')
  updatePlanPayment(@Param('id') id: string, @Body() dto: UpdatePlanPaymentDto) {
    return this.plansService.updatePlanPayment(id, dto);
  }

  @Auth(/*Roles.ADMIN*/)
  @ApiOperation({ summary: 'Update plan payment status' })
  @Patch('payments/status/:id')
  updateStatusPlanPayment(@Param('id') id: string, @Body() dto: UpdateStatusDto) {
    return this.plansService.updateStatusPlanPayment(id, dto.status);
  }

  @Auth(/*Roles.ADMIN*/)
  @ApiOperation({ summary: 'Create plan type' })
  @Post('types')
  createPlanType(@Body() dto: CreatePlanTypeDto) {
    return this.plansService.createPlanType(dto);
  }

  @ApiOperation({ summary: 'Get all plan types' })
  @Get('types')
  findAllPlanTypes(@Headers('key') key: string) {
    return this.plansService.findAllPlanTypes(key);
  }

  @ApiOperation({ summary: 'Get plan type by id' })
  @Get('types/:id')
  findOnePlanType(@Headers('key') key: string, @Param('id') id: string) {
    return this.plansService.findOnePlanType(key, id);
  }

  @Auth(/*Roles.ADMIN*/)
  @ApiOperation({ summary: 'Update plan type' })
  @Patch('types/:id')
  updatePlanType(@Param('id') id: string, @Body() dto: UpdatePlanTypeDto) {
    return this.plansService.updatePlanType(id, dto);
  }

  @Auth(/*Roles.ADMIN*/)
  @ApiOperation({ summary: 'Update plan type status' })
  @Patch('types/status/:id')
  updateStatusPlanType(@Param('id') id: string, @Body() dto: UpdateStatusDto) {
    return this.plansService.updateStatusPlanType(id, dto.status);
  }
}
