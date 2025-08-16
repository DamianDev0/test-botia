import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";

export enum PlanDuration {
  MONTHLY = 'Mensual',
  QUARTERLY = 'Trimestral',
  YEARLY = 'Anual'
}

@Schema({ timestamps: true, collection: 'plan_types' })
export class PlanType {
  @Prop()
  id: string;

  @Prop({ required: true })
  plan: string;

  @Prop()
  description?: string;

  @Prop()
  price?: number;

  @Prop()
  numInstallment?: number;

  @Prop()
  valInstallment?: number;

  @Prop({ enum: PlanDuration })
  duration?: PlanDuration;

  @Prop({ default: true })
  status: boolean;

  @Prop()
  companyId?: string;

  @Prop()
  officeId?: string;

  // @Prop({ type: [String], default: [] })
  // features?: string[];

  // @Prop({ type: [String], default: [] })
  // benefits?: string[];
}

export const PlanTypeSchema = SchemaFactory.createForClass(PlanType);
