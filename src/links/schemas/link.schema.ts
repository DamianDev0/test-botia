import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Roles } from 'src/users/schemas/user.schema';

@Schema({ timestamps: true })
export class Link extends Document {
  @Prop()
  id: string;
  
  @Prop()
  companyId: string;

  @Prop()
  officeId: string;

  @Prop()
  url: string;

  @Prop({ default: true })
  status: boolean;

  @Prop()
  linkType: string;

  @Prop({
    type: String,
    enum: Roles,
    default: Roles.USER
  })
  role: Roles;

  @Prop()
  question?: string;

  @Prop()
  answer?: string;

  @Prop()
  wordId?: string;
}

export const LinkSchema = SchemaFactory.createForClass(Link);
