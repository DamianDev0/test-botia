import { Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { Plan } from './schema/plan.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlanPaymentDto } from './dto/create-plan-payment.dto';
import { PlanPayment } from './schema/plan-payment.schema';
import { UpdatePlanPaymentDto } from './dto/update-plan-payment.dto';
import { CreatePlanTypeDto } from './dto/create-plan-type.dto';
import { PlanType } from './schema/plan-type.schema';
import { UpdatePlanTypeDto } from './dto/update-plan-type.dto';

@Injectable()
export class PlansService {
  constructor(
    @InjectModel(Plan.name)
    private planModel: Model<Plan>,
    @InjectModel(PlanPayment.name)
    private planPaymentModel: Model<PlanPayment>,
    @InjectModel(PlanType.name)
    private planTypeModel: Model<PlanType>
  ) {}

  async createPlan(dto: CreatePlanDto) {
    try {
      const plan = new this.planModel(dto);
      await plan.save();

      return {
        status: true,
        message: 'Plan created successfully',
        data: plan
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async findAllPlans(key: string) {
    if (key !== process.env.API_KEY) throw new UnauthorizedException();
    try {
      const plans = await this.planModel.find();
      return {
        status: true,
        message: 'Plans fetched successfully',
        data: plans
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async findOnePlan(key: string, id: string) {
    if (key !== process.env.API_KEY) throw new UnauthorizedException();
    try {
      const plan = await this.planModel.findById(id);
      if (!plan) throw new NotFoundException('Plan not found');

      return {
        status: true,
        message: 'Plan found successfully',
        data: plan
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async updatePlan(id: string, dto: UpdatePlanDto) {
    try {
      const plan = await this.planModel.findByIdAndUpdate(
        id, dto, { new: true, runValidators: true });
      if (!plan) throw new NotFoundException('Plan not found');

      return {
        status: true,
        message: 'Plan updated successfully',
        data: plan
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async updateStatusPlan(id: string, status: boolean) {
    try {
      let plan = await this.planModel.findByIdAndUpdate(
        id, { status }, { new: true, runValidators: true });
      if (!plan) throw new NotFoundException('Plan not found');

      return {
        status: true,
        message: 'Update success',
        data: plan
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async createPlanPayment(dto: CreatePlanPaymentDto) {
    try {
      const planPayment = new this.planPaymentModel(dto);
      await planPayment.save();

      return {
        status: true,
        message: 'Plan payment created successfully',
        data: planPayment
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  } 

  async findAllPlanPayments() {
    try {
      const planPayments = await this.planPaymentModel.find();
      return {
        status: true,
        message: 'Plan payments fetched successfully',
        data: planPayments
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async findOnePlanPayment(id: string) {
    try {
      const planPayment = await this.planPaymentModel.findById(id);
      if (!planPayment) throw new NotFoundException('Plan payment not found');

      return {
        status: true,
        message: 'Plan payment found successfully',
        data: planPayment
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }
  
  async updatePlanPayment(id: string, dto: UpdatePlanPaymentDto) {
    try {
      const planPayment = await this.planPaymentModel.findByIdAndUpdate(
        id, dto, { new: true, runValidators: true });
      if (!planPayment) throw new NotFoundException('Plan payment not found');

      return {
        status: true,
        message: 'Plan payment updated successfully',
        data: planPayment
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async updateStatusPlanPayment(id: string, status: boolean) {
    try {
      const planPayment = await this.planPaymentModel.findByIdAndUpdate(
        id, { status }, { new: true, runValidators: true });
      if (!planPayment) throw new NotFoundException('Plan payment not found');

      return {
        status: true,
        message: 'Plan payment updated successfully',
        data: planPayment
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async createPlanType(dto: CreatePlanTypeDto) {
    try {
      const planType = new this.planTypeModel(dto);
      await planType.save();

      return {
        status: true,
        message: 'Plan type created successfully',
        data: planType
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async findAllPlanTypes(key: string) {
    if (key !== process.env.API_KEY) throw new UnauthorizedException();
    try {
      const planTypes = await this.planTypeModel.find();
      return {
        status: true,
        message: 'Plan types fetched successfully',
        data: planTypes
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async findOnePlanType(key: string, id: string) {
    if (key !== process.env.API_KEY) throw new UnauthorizedException();
    try {
      const planType = await this.planTypeModel.findById(id);
      if (!planType) throw new NotFoundException('Plan type not found');

      return {
        status: true,
        message: 'Plan type found successfully',
        data: planType
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async updatePlanType(id: string, dto: UpdatePlanTypeDto) {
    try {
      const planType = await this.planTypeModel.findByIdAndUpdate(
        id, dto, { new: true, runValidators: true });
      if (!planType) throw new NotFoundException('Plan type not found');

      return {
        status: true,
        message: 'Plan type updated successfully',
        data: planType
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }
  
  async updateStatusPlanType(id: string, status: boolean) {
    try {
      const planType = await this.planTypeModel.findByIdAndUpdate(
        id, { status }, { new: true, runValidators: true });
      if (!planType) throw new NotFoundException('Plan type not found');

      return {
        status: true,
        message: 'Plan type updated successfully',
        data: planType
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }
}
