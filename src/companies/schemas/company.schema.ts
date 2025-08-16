import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Company extends Document {
  @Prop()
  id: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ default: true })
  status: boolean;

  @Prop()
  phone?: string;

  @Prop()
  whatsappId?: string;

  @Prop()
  phoneId?: string;

  @Prop()
  city?: string;

  @Prop()
  department?: string;

  @Prop()
  address?: string;

  @Prop({ type: [String], default: [] })
  geolocation?: string[];

  @Prop()
  phoneCode?: string;

  @Prop()
  niche?: string;

  @Prop()
  country?: string;

  /*@Prop({
    type: String,
    enum: DocumentTypes,
    required: true
  })
  document: DocumentTypes;

  @Prop({ required: true, unique: true })
  documentNumber: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  botName: string;

  @Prop({ default: 'Eres un asistente amable y responderás en el mismo idioma.' })
  systemMessage: string;

  @Prop()
  description?: string;*/
}

export const CompanySchema = SchemaFactory.createForClass(Company);
