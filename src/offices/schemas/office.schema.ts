import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Office extends Document {
  @Prop()
  id: string;

  @Prop({ required: true })
  companyId: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  city?: string;

  @Prop()
  department?: string;

  @Prop()
  address?: string;

  @Prop({ default: true })
  status: boolean;

  @Prop({ type: [String], default: [] })
  geolocation?: string[];

  @Prop()
  phoneCode?: string;

  @Prop()
  country?: string;

  @Prop()
  phone?: string;
}

export const OfficeSchema = SchemaFactory.createForClass(Office);
