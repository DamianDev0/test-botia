import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class Plan {
  @Prop()
  id: string;

  @Prop()
  reference: string;

  @Prop()
  userId: string;

  @Prop({ default: true })
  status: boolean;

  @Prop({ default: 'ACTIVO' })
  planStatus?: string;

  @Prop()
  startDate?: Date;

  @Prop()
  endDate?: Date;

  @Prop()
  order?: number;

  @Prop()
  companyId?: string;

  @Prop()
  officeId?: string;

  @Prop()
  planTypeId?: string;
}

export const PlanSchema = SchemaFactory.createForClass(Plan);
