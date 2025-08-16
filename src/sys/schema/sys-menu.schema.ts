import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { Prop } from "@nestjs/mongoose";

@Schema({ timestamps: true, collection: 'sys_menus' })
export class SysMenu {
  @Prop()
  id: string;

  @Prop()
  firestoreId: string;

  @Prop()
  alignment?: string;

  @Prop({ required: true })
  app: string;

  @Prop({ required: true })
  companyId: string;

  @Prop({ default: true })
  status: boolean;

  @Prop({ required: true })
  menu: string;

  @Prop({ required: true })
  order: number;

  @Prop({ required: true })
  role: string;

  @Prop({ required: true })
  officeId: string;

  @Prop()
  view?: string;
}

export const SysMenuSchema = SchemaFactory.createForClass(SysMenu);
