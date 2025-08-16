import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { PlanTypeSchema } from 'src/plans/schema/plan-type.schema';
import { PlanType } from 'src/plans/schema/plan-type.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService],
  imports: [
    MongooseModule.forFeature([
      { name: PlanType.name, schema: PlanTypeSchema },
    ]),
    AuthModule
  ],
})
export class PaymentsModule {}
