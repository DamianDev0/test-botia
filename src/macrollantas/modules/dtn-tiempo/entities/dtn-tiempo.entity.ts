import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DTN_TIEMPO')
export class DtnTiempo extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  idp: string;
}
