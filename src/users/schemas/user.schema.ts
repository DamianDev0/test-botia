import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum Roles {
  ROOT = 'Root',
  SUPERADMIN = 'SuperAdmin',
  ADMIN = 'Admin',
  USER = 'User'
}

export enum DocumentTypes {
  CC = 'Cédula de Ciudadanía',
  CE = 'Cédula de Extranjería',
  PASSPORT = 'PASSPORT',
  NIT = 'NIT'
}

@Schema({ timestamps: true })
export class User extends Document {
  @Prop()
  id: string;

  @Prop({ unique: true, required: true })
  uid: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  phone: string;

  @Prop({
    type: String,
    enum: Roles,
    default: Roles.USER
  })
  role: Roles;

  @Prop({ default: true })
  status: boolean;

  @Prop({
    type: String,
    enum: DocumentTypes,
    required: true
  })
  document: DocumentTypes;

  @Prop({ required: true, unique: true })
  documentNumber: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
