import { Module } from '@nestjs/common';
import { PlansService } from './plans.service';
import { PlansController } from './plans.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Plan } from './schema/plan.schema';
import { PlanType } from './schema/plan-type.schema';
import { PlanPayment } from './schema/plan-payment.schema';
import { PlanTypeSchema } from './schema/plan-type.schema';
import { PlanSchema } from './schema/plan.schema';
import { PlanPaymentSchema } from './schema/plan-payment.schema';

@Module({
  controllers: [PlansController],
  providers: [PlansService],
  imports: [
    MongooseModule.forFeature([
      { name: Plan.name, schema: PlanSchema },
      { name: PlanPayment.name, schema: PlanPaymentSchema },
      { name: PlanType.name, schema: PlanTypeSchema },
    ]),
  ],  
})
export class PlansModule {}
