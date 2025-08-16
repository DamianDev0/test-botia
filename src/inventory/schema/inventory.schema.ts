import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { Prop } from "@nestjs/mongoose";

@Schema({ timestamps: true, collection: 'inventory' })
export class Inventory {
  @Prop()
  id: string;

  @Prop({ required: true })
  firebaseId: string;

  @Prop({ required: true })
  companyId: string;

  @Prop({ required: true })
  officeId: string;

  @Prop({ required: true })
  sku: string;

  @Prop()
  description: string;

  @Prop()
  reference: string;

  @Prop()
  price: number;

  @Prop({ required: true, default: 0 })
  stock: number;

  @Prop()
  model1: string;

  @Prop()
  model2: string;

  @Prop({ default: true })
  status: boolean;
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);