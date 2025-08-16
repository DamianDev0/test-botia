import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";

@Schema({ timestamps: true, collection: 'plan_payments' })
export class PlanPayment {
  @Prop()
  id: string;

  @Prop()
  companyId?: string;

  @Prop({ default: true })
  status: boolean;

  @Prop()
  paymentDate?: Date;

  @Prop()
  numInstallment?: number;

  @Prop()
  officeId?: string;

  @Prop()
  paymentType?: string;

  @Prop()
  planTypeId?: string;

  @Prop()
  amountPaid?: number;
}

export const PlanPaymentSchema = SchemaFactory.createForClass(PlanPayment);
