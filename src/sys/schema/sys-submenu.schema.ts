import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { Prop } from "@nestjs/mongoose";

@Schema({ timestamps: true, collection: 'sys_submenus' })
export class SysSubmenu {
  @Prop()
  id: string;

  @Prop()
  firestoreId: string;

  @Prop()
  alignment: string;

  @Prop()
  app: string;

  @Prop({ required: true })
  companyId: string;

  @Prop({ default: true })
  status: boolean;

  @Prop()
  menu: string;

  @Prop()
  submenu: string;

  @Prop()
  orderM: number;

  @Prop()
  orderS: number;

  @Prop({ required: true })
  role: string;

  @Prop()
  officeId: string;

  @Prop()
  view: string;
}

export const SysSubmenuSchema = SchemaFactory.createForClass(SysSubmenu);
