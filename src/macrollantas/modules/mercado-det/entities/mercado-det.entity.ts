import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('MERCADO_DET')
export class MercadoDet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  IDP: string;
}
