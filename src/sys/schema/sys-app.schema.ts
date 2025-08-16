import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { Prop } from "@nestjs/mongoose";

@Schema({ timestamps: true, collection: 'sys_apps' })
export class SysApp {
  @Prop()
  id: string;

  @Prop()
  firestoreId: string;

  @Prop({ required: true })
  app: string;

  @Prop({ required: true })
  companyId: string;

  @Prop({ default: true })
  status: boolean;

  @Prop({ required: true })
  role: string;

  @Prop({ required: true })
  officeId: string;
}

export const SysAppSchema = SchemaFactory.createForClass(SysApp);
