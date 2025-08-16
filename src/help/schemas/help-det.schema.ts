import { SchemaFactory } from "@nestjs/mongoose";
import { Prop, Schema } from "@nestjs/mongoose";

@Schema({ timestamps: true, collection: 'help-det' })
export class HelpDet {
  @Prop()
  id: string;

  @Prop({ required: true })
  companyId: string;

  @Prop({ required: true })
  officeId: string;

  @Prop({ required: true })
  helpId: string;

  @Prop()
  title?: string;

  @Prop({ required: true })
  help: string;

  @Prop({ required: true })
  order: number;

  @Prop({ default: true })
  status: boolean;
}

export const HelpDetSchema = SchemaFactory.createForClass(HelpDet);
