import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true, collection: 'type_channels' })
export class TypeChannel extends Document {
  @Prop()
  id: string;

  @Prop()
  companyId: string;

  @Prop({ default: true })
  status: boolean;

  @Prop()
  icon: string;

  @Prop()
  officeId: string;

  @Prop()
  typeChannel: string
}

export const TypeChannelSchema = SchemaFactory.createForClass(TypeChannel);
