import { SchemaFactory } from "@nestjs/mongoose";
import { Prop, Schema } from "@nestjs/mongoose";

@Schema({ timestamps: true, collection: 'help' })
export class Help {
  @Prop({ required: true })
  companyId: string;

  @Prop({ required: true })
  officeId: string;

  @Prop({ required: true })
  help: string;

  @Prop()
  title?: string;

  @Prop({ required: true })
  order: number;

  @Prop()
  fileUrl?: string;

  @Prop({ default: false })
  admin: boolean;

  @Prop({ default: true })
  status: boolean;
}

export const HelpSchema = SchemaFactory.createForClass(Help);
