import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'link_words' })
export class LinkWord extends Document {
  @Prop()
  id: string;
  
  @Prop()
  companyId: string;

  @Prop()
  officeId: string;
  
  @Prop()
  linkId?: string;

  @Prop()
  word: string;

  @Prop({ default: true })
  status: boolean;

  @Prop()
  order: number;
}

export const LinkWordSchema = SchemaFactory.createForClass(LinkWord);
