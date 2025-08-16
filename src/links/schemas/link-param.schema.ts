import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'link_params' })
export class LinkParam extends Document {
  @Prop()
  id: string;

  @Prop()
  linkId?: string;

  @Prop()
  attribute: string;

  @Prop()
  format?: string;
  
  @Prop()
  order: number;
  
  @Prop()
  dataType: string;
  
  @Prop()
  value: string;

  @Prop({ default: true })
  status: boolean;
}

export const LinkParamSchema = SchemaFactory.createForClass(LinkParam);
